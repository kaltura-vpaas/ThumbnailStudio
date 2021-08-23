import get from "lodash/get";
import constants from "./constants";
import Instance from "./models";
import { generateRandom } from "../../../../utils";
import { getSelectedInstance } from "./selectors";
import {
  setInstanceProperty,
  clearInstanceProperty
} from "../../instanceProps/modules/actions";

const sourceActions = require("./sourceActions.json"); // eslint-disable-line

const instance: Instance = {
  id: "",
  entryId: "",
  sourceAction: null,
  props: sourceActions
};

export const setSelectedInstance = (instance: Instance) => (
  dispatch: any,
  getState: any
) => {
  const selected = getSelectedInstance(getState());
  if (get(selected, "id") !== instance.id) {
    dispatch(setInstanceProperty(instance));
    dispatch({ type: constants.SET_SELECTED_INSTANCE, payload: instance });
  }
};

export const clearSelectedInstance = () => {
  return { type: constants.CLEAR_SELECTED_INSTANCE };
};

export const addInstance = () => (dispatch: any) => {
  const newInstance = { ...instance, id: generateRandom() };
  dispatch({ type: constants.ADD_INSTANCE, payload: newInstance });
  dispatch(setSelectedInstance(newInstance));
};

export const removeInstance = () => (dispatch: any, getState: any) => {
  const instance = getSelectedInstance(getState());
  dispatch(clearInstanceProperty(instance));
  dispatch(clearSelectedInstance());
  dispatch({ type: constants.REMOVE_INSTANCE, payload: instance });
};
