import constants from "./constants";
import Instance from "./models";

export interface State {
  instanceList: Instance[];
  selectedInstance: Instance | null;
}

const initialState: State = {
  selectedInstance: null,
  instanceList: []
};

export default (state: State = initialState, action: any) => {
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
