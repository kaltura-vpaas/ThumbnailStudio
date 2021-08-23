import merge from "lodash/merge";
import map from "lodash/map";
import constants from "./constants";
import Instance from "../../instanceList/modules/models";
import {
  getState as getInstancePropState,
  getInstanceSourceAction
} from "../modules/selectors";
import { getSelectedInstance } from "../../instanceList/modules/selectors";

export const changeInsnanceProperty = (propId: string, value: any) => (
  dispatch: any,
  getState: any
) => {
  const id = getSelectedInstance(getState()).id;
  const instanceProps = {
    ...getInstancePropState(getState())[id],
    [propId]: value
  };
  dispatch({
    type: constants.CHANGE_INSTANCE_PROPERTY,
    payload: { id, instanceProps }
  });
};

export const changeInstanceSourceActionProps = (propId: string, value: any) => (
  dispatch: any,
  getState: any
) => {
  const currentSourceAction = getInstanceSourceAction(getState());
  const sourceAction = {
    ...currentSourceAction,
    props: map(currentSourceAction.props, (p: any) =>
      p.id === propId ? { ...p, value } : p
    )
  };
  dispatch(changeInsnanceProperty("sourceAction", sourceAction));
};

export const setInstanceProperty = (instance: Instance) => (
  dispatch: any,
  getState: any
) => {
  const instanceProps = getInstancePropState(getState())[instance.id] || {};
  dispatch({
    type: constants.SET_INSTANCE_PROPERTY,
    payload: {
      props: merge(instance, instanceProps),
      id: instance.id
    }
  });
};

export const clearInstanceProperty = (instance: Instance) => {
  return { type: constants.CLEAR_INSTANCE_PROPERTY, payload: instance };
};
