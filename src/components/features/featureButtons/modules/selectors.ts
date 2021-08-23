import { createSelector } from "reselect";
import {
  getFeatures,
  getSelectedFeatureIndex
} from "../../featureStack/modules/selectors";

export const isMoveUpEnabled = createSelector(
  getSelectedFeatureIndex,
  index => index > 0
);

export const isMoveDownEnabled = createSelector(
  [getFeatures, getSelectedFeatureIndex],
  (list: [], index: number) => index > -1 && index < list.length - 1
);
