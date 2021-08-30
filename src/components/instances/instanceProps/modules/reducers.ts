import omit from "lodash/omit";
import constants from "./constants";

const initialState = {};

const propred = (state = initialState, action: any) => {
  switch (action.type) {
    case constants.SET_INSTANCE_PROPERTY:
      return {
        ...state,
        [action.payload.id]: action.payload.props
      };
    case constants.CLEAR_INSTANCE_PROPERTY:
      return omit(state, action.payload.id);
    case constants.CHANGE_INSTANCE_PROPERTY:
      return {
        ...state,
        [action.payload.id]: action.payload.instanceProps
      };
    default:
      return state;
  }
};

export default propred;