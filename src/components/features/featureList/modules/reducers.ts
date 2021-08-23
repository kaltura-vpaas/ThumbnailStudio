import constants from "./constants";
import Feature from "../../modules/models";

export interface State {
  featureList: Feature[];
  isFetching: boolean;
  error: object | null;
  selectedFeature: Feature | null;
}

const initialState: State = {
  isFetching: false,
  error: null,
  featureList: [],
  selectedFeature: null
};

export default (state: State = initialState, action: any) => {
  switch (action.type) {
    case constants.SET_LIST:
      return {
        ...state,
        featureList: action.payload
      };
    case constants.FETCH_LIST_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case constants.FETCH_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case constants.FETCH_LIST_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case constants.SET_SELECTED_FEATURE:
      return {
        ...state,
        selectedFeature: action.payload
      };
    case constants.CLEAR_SELECTED_FEATURE:
      return {
        ...state,
        selectedFeature: null
      };
    default:
      return state;
  }
};
