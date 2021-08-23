import { connect } from "react-redux";
import FeatureList from "./FeatureList";
import { State } from "./modules/reducers";
import { getFeatures, getSelectedFeature } from "./modules/selectors";
import { getSelectedInstance } from "../../instances/instanceList/modules/selectors";

import { fetchFeatureList, setSelectedFeature } from "./modules/actions";

const mapDispatchToProps = {
  fetchFeatureList,
  setSelectedFeature
};

const mapStateToProps = (state: State) => ({
  list: getFeatures(state),
  selectedFeature: getSelectedFeature(state),
  disabled: !getSelectedInstance(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureList);
