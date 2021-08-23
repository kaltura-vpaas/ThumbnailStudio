import constants from "./constants";

// export interface State {
// featureProps: any;
// }

const initialState = {
  ks: "",
  partnerId: ""
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case constants.SET_KS:
      return {
        ...state,
        ks: action.payload
      };
    case constants.SET_PARTNER_ID:
      return {
        ...state,
        partnerId: action.payload
      };
    default:
      return state;
  }
};
