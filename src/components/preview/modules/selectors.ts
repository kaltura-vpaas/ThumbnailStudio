import { createSelector } from "reselect";
import { getState as featurePropsState } from "../../features/featureProps/modules/selectors";
import { getFeatures as featureStackList } from "../../features/featureStack/modules/selectors";
import { getState as getInstancePropsState } from "../../instances/instanceProps/modules/selectors";
import { getKs, getPartnerId } from "../../appConfig/modules/selectors";
import forEach from "lodash/forEach";
import isArray from "lodash/isArray";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty"; 

const baseApi = "https://www.kaltura.com";
const apiVersion = "/api_v3";

const getAliasOrName = (property: { alias: any; name: string }) => {
  return isArray(property.alias)
    ? property.alias[0]
    : property.alias || property.name;
};

const getValue = (property: { value?: any; defaultValue?: any; type?: any }) => {
  if (property.value == property.defaultValue) { // eslint-disable-line
    if (property.type === 'string') {
      if (isEmpty(property.value)) {
        return "";
      } else {
        return property.value;
      }
    }
    return "";
  }
  return property.value;
};

export const getServiceUrl = createSelector(
  [getKs, getPartnerId],
  (ks, partnerId) => {
    return `${baseApi}${apiVersion}/service/thumbnail_thumbnail${ks ? `/ks/${ks}` : ""
      }${partnerId ? `/p/${partnerId}` : ""}/action/transform/transformString`;
  }
);

const longAddPropertyToUrl = (props: []) => {

  let url = "";
  forEach(props, (property: any) => {
    const value = getValue(property);
    if (value) {
      url = url + `_${property.name}-${value}`;
    }
  });
  return url;
};

export const makeLongUrl = createSelector(
  [getServiceUrl, featureStackList, featurePropsState, getInstancePropsState],
  (serviceUrl, fs, fp, ip) => {
    let url = `${serviceUrl}/`;
    let iteration = 0;
    forEach(ip, (instance: any) => {
      const sourceAction = instance.sourceAction;
      if (isEmpty(instance.entryId)) {
        return true;
      }
      url = url + `${iteration > 0 ? "+" : ""}id-${instance.entryId}`;
      if (!isEmpty(sourceAction)) {
        url = url + `,${sourceAction.name}`;
        url = url + longAddPropertyToUrl(sourceAction.props);
      }
      const filteredFeatures = filter(fs, ["instanceId", instance.id]);
      forEach(filteredFeatures, (feature: any) => {
        url = url + `,${feature.name}`;
        url = url + longAddPropertyToUrl(fp[feature.uniqId] || []);
      });
      iteration++;
    });
    return url;
  }
);

const addPropertyToUrl = (props: []) => {
  let url = "";
  forEach(props, (property: any) => {
    const value = getValue(property);
    if (value) {
      url = url + `_${getAliasOrName(property)}-${value}`;
    }
  });
  return url;
};

export const makePreviewUrl = createSelector(
  [getServiceUrl, featureStackList, featurePropsState, getInstancePropsState],
  (serviceUrl, fs, fp, ip) => {
    let url = `${serviceUrl}/`;
    let iteration = 0;
    forEach(ip, (instance: any) => {
      const sourceAction = instance.sourceAction;
      if (isEmpty(instance.entryId)) {
        return true;
      }
      url = url + `${iteration > 0 ? "+" : ""}id-${instance.entryId}`;
      if (!isEmpty(sourceAction)) {
        url = url + `,${getAliasOrName(sourceAction)}`;
        url = url + addPropertyToUrl(sourceAction.props);
      }
      const filteredFeatures = filter(fs, ["instanceId", instance.id]);
      forEach(filteredFeatures, (feature: any) => {
        url = url + `,${getAliasOrName(feature)}`;
        url = url + addPropertyToUrl(fp[feature.uniqId] || []);
      });
      iteration++;
    });
    return url;
  }
);
