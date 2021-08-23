import get from "lodash/get";
import { createSelector } from "reselect";
import { key } from "./constants";
import { getSelectedFeature } from "../../featureStack/modules/selectors";

export const getState = (state: any) => state[key];

export const getFeatureProps = createSelector(
  [getState, getSelectedFeature],
  (s, sf) => {
    return s[get(sf, "uniqId")] || [];
  }
);
