import constants from "./constants";
import Instance from "./models";
const sourceActions = require("./sourceActions.json"); // eslint-disable-line

export interface State {
  instanceList: Instance[];
  selectedInstance: Instance | null;
}

const initInstance = {
  id: "sbsqi5",
  entryId: "0_60gyd613",
  sourceAction: null,
  props: sourceActions
};

const initialState: State = {
  selectedInstance: initInstance,
  instanceList: [
    initInstance
    ]
};

const redstate = (state: State = initialState, action: any) => {
  switch (action.type) {
    case constants.SET_SELECTED_INSTANCE:
      return {
        ...state,
        selectedInstance: action.payload
      };
    case constants.CLEAR_SELECTED_INSTANCE:
      return {
        ...state,
        selectedInstance: null
      };
    case constants.ADD_INSTANCE:
      return {
        ...state,
        instanceList: [...state.instanceList, action.payload]
      };
    case constants.REMOVE_INSTANCE:
      return {
        ...state,
        instanceList: state.instanceList.filter(
          (instance: Instance) => instance.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default redstate;