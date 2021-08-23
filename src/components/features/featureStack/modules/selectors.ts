import { createSelector } from "reselect";
import filter from "lodash/filter";
import get from "lodash/get";
import findIndex from "lodash/findIndex";
import { key } from "./constants";
import { getSelectedInstance } from "../../../instances/instanceList/modules/selectors";
import Instance from "../../../instances/instanceList/modules/models";
import { FeatureStack } from "../../modules/models";

export const getState = (state: any) => state[key];

export const getFeatures = createSelector(
  getState,
  s => s.featureList
);

export const getSelectedInstanceFeatures = createSelector(
  [getFeatures, getSelectedInstance],
  (list: [], instance: Instance) =>
    filter(list, ["instanceId", get(instance, "id")])
);

export const getSelectedFeature = createSelector(
  getState,
  s => s.selectedFeature
);

export const getSelectedFeatureIndex = createSelector(
  [getFeatures, getSelectedFeature],
  (list: [], selected: FeatureStack) => {
    return findIndex(
      list,
      (el: FeatureStack) => el.uniqId === get(selected, "uniqId")
    );
  }
);
