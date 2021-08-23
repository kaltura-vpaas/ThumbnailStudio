import { createSelector } from "reselect";
import { key } from "./constants";

const getState = (state: any) => state[key];

export const getFeatures = createSelector(
  getState,
  s => s.featureList
);

export const getSelectedFeature = createSelector(
  getState,
  s => s.selectedFeature
);
