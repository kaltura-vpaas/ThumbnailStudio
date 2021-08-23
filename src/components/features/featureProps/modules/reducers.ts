import omit from "lodash/omit";
import constants from "./constants";

// export interface State {
// featureProps: any;
// }

const initialState = {};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case constants.SET_FEATURE_PROPERTY:
      return {
        ...state,
        [action.payload.uniqId]: action.payload.props
      };
    case constants.CLEAR_FEATURE_PROPERTY:
      return omit(state, action.payload.uniqId);
    case constants.CHANGE_FEATURE_PROPERTY:
      return {
        ...state,
        [action.payload.uniqId]: action.payload.featureProps
      };
    default:
      return state;
  }
};
