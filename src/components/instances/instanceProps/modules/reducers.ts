import omit from "lodash/omit";
import constants from "./constants";
const sourceActions = require("../../instanceList/modules/sourceActions.json"); // eslint-disable-line

const initialState={
  sbsqi5: {
    id: "sbsqi5",
    entryId: "0_60gyd613",
    sourceAction: sourceActions[0],
    props: sourceActions
  }
}

const xinitialState = {}

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