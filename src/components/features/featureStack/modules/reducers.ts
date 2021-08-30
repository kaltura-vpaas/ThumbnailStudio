import constants from "./constants";
import { FeatureStack } from "../../modules/models";

export interface State {
  featureList: FeatureStack[];
  selectedFeature: FeatureStack | null;
}

const initialState: State = {
  selectedFeature: null,
  featureList: []
};

const stackreduce =  (state: State = initialState, action: any) => {
  switch (action.type) {
    case constants.SET_LIST:
      return {
        ...state,
        featureList: action.payload
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
    case constants.ADD_FEATURE:
      return {
        ...state,
        featureList: [...state.featureList, action.payload]
      };
    case constants.REMOVE_FEATURE:
      return {
        ...state,
        featureList: state.featureList.filter(
          (feature: FeatureStack) => feature.uniqId !== action.payload.uniqId
        )
      };
    default:
      return state;
  }
};

export default stackreduce;