import { connect } from "react-redux";
import FeatureStack from "./FeatureStack";
import { State } from "./modules/reducers";
import {
  getSelectedInstanceFeatures,
  getSelectedFeature
} from "./modules/selectors";

import {
  addFeature,
  removeFeature,
  setSelectedFeature
} from "./modules/actions";

const mapDispatchToProps = {
  addFeature,
  removeFeature,
  setSelectedFeature
};

const mapStateToProps = (state: State) => ({
  list: getSelectedInstanceFeatures(state),
  selectedFeature: getSelectedFeature(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureStack);
