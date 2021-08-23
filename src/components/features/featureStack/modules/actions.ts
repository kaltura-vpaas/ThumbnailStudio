import get from "lodash/get";
import { Dispatch } from "redux";
import constants from "./constants";
import { FeatureStack } from "../../modules/models";
import {
  setFeatureProperty,
  clearFeatureProperty
} from "../../featureProps/modules/actions";
import { generateRandom } from "../../../../utils";

import { getSelectedFeature as getSelectedFeatureList } from "../../featureList/modules/selectors";
import { getSelectedInstance } from "../../../instances/instanceList/modules/selectors";
import { getSelectedFeature, getFeatures } from "./selectors";

import { clearSelectedFeature as cleaFeatureListSelected } from "../../featureList/modules/actions";

export const setList = (list: []) => {
  return { type: constants.SET_LIST, payload: list };
};

export const clearSelectedFeature = () => {
  return { type: constants.CLEAR_SELECTED_FEATURE };
};

export const addFeature = () => (dispatch: Dispatch, getState: any) => {
  const feature = getSelectedFeatureList(getState());
  const instanceId = getSelectedInstance(getState());
  dispatch({
    type: constants.ADD_FEATURE,
    payload: {
      ...feature,
      uniqId: `${feature.id}-${generateRandom()}`,
      instanceId: get(instanceId, "id")
    }
  });
};

export const removeFeature = () => (dispatch: Dispatch, getState: any) => {
  const feature = getSelectedFeature(getState());
  dispatch(clearFeatureProperty(feature));
  dispatch(clearSelectedFeature());
  dispatch({ type: constants.REMOVE_FEATURE, payload: feature });
};

export const setSelectedFeature = (feature: FeatureStack) => (
  dispatch: any,
  getState: any
) => {
  const selected = getSelectedFeature(getState());
  if (get(selected, "uniqId") !== feature.uniqId) {
    dispatch({ type: constants.SET_SELECTED_FEATURE, payload: feature });
    dispatch(setFeatureProperty(feature));
  }
  if (getSelectedFeatureList(getState())) {
    dispatch(cleaFeatureListSelected());
  }
};

export const changeFeaturePosition = (oldIndex: number, newIndex: number) => (
  dispatch: Dispatch,
  getState: () => void
) => {
  const list = getFeatures(getState());
  const feature = list[oldIndex];
  let newList: any = [];
  list.forEach((el: any, index: number) => {
    if (index === oldIndex) {
      return;
    }
    if (index === newIndex) {
      return (newList =
        newIndex > oldIndex
          ? [...newList, el, feature]
          : [...newList, feature, el]);
    }
    newList = [...newList, el];
  });
  dispatch(setList(newList));
};
