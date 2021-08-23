import get from "lodash/get";
import { Dispatch } from "redux";
import constants from "./constants";
import Feature from "../../modules/models";

import { clearSelectedFeature as clearFeatureStackSelectedFeature } from "../../featureStack/modules/actions";
import { getSelectedFeature } from "./selectors";
import { getSelectedFeature as getSelectedFeatureStack } from "../../featureStack/modules/selectors";

// export interface FetchFeatureList {
//   type: constants.FETCH_LIST_REQUEST;
//   payload: { list: Feature };
// }

export const setList = (list: []) => {
  return { type: constants.SET_LIST, payload: list };
};

export const fetchFeatureList = () => async (dispatch: Dispatch) => {
  dispatch({ type: constants.FETCH_LIST_REQUEST });
  const list = await require("./features.json"); // eslint-disable-line
  dispatch({ type: constants.FETCH_LIST_SUCCESS });
  dispatch(setList(list));
  // dispatch({ type: constants.FETCH_LIST_FAIL, payload: error }); // placeholder
};

export const setSelectedFeature = (feature: Feature) => (
  dispatch: any,
  getState: any
) => {
  const selected = getSelectedFeature(getState());
  if (get(selected, "id") !== feature.id) {
    if (getSelectedFeatureStack(getState())) {
      dispatch(clearFeatureStackSelectedFeature());
    }
    dispatch({ type: constants.SET_SELECTED_FEATURE, payload: feature });
  }
};

export const clearSelectedFeature = () => {
  return { type: constants.CLEAR_SELECTED_FEATURE };
};
