import merge from "lodash/merge";
import constants from "./constants";
import { FeatureStack } from "../../modules/models";
import { getState as getFeaturePropState } from "../modules/selectors";
import { getSelectedFeature } from "../../featureStack/modules/selectors";

export const setFeatureProperty = (feature: FeatureStack) => (
  dispatch: any,
  getState: any
) => {
  const featureProps = getFeaturePropState(getState())[feature.uniqId] || [];
  dispatch({
    type: constants.SET_FEATURE_PROPERTY,
    payload: {
      props: merge(featureProps, feature.props),
      uniqId: feature.uniqId
    }
  });
};

export const clearFeatureProperty = (feature: FeatureStack) => {
  return { type: constants.CLEAR_FEATURE_PROPERTY, payload: feature };
};

export const changeFeatureProperty = (propId: number, value: any) => (
  dispatch: any,
  getState: any
) => {
  const uniqId = getSelectedFeature(getState()).uniqId;
  const featureProps = getFeaturePropState(getState())[uniqId].map((p: any) =>
    p.id === propId ? { ...p, value } : p
  );
  dispatch({
    type: constants.CHANGE_FEATURE_PROPERTY,
    payload: { uniqId, featureProps }
  });
};
