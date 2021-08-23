import { combineReducers } from "redux";

import features from "../components/features/featureList/modules";
import featuresStack from "../components/features/featureStack/modules";
import featureProps from "../components/features/featureProps/modules";
import appConfig from "../components/appConfig/modules";
import instances from "../components/instances/instanceList/modules";
import instanceProps from "../components/instances/instanceProps/modules";

export default combineReducers({
  ...appConfig,
  ...features,
  ...featuresStack,
  ...featureProps,
  ...instances,
  ...instanceProps
});
