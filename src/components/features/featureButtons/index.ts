import { connect } from "react-redux";
import FeatureButtons from "./FeatureButtons";
import {
  getSelectedFeature,
  getSelectedFeatureIndex
} from "../featureStack/modules/selectors";
import { getSelectedFeature as getFeatureListSelected } from "../featureList/modules/selectors";

import { isMoveDownEnabled, isMoveUpEnabled } from "./modules/selectors";

import { addFeature, removeFeature } from "../featureStack/modules/actions";
import { changeFeaturePosition } from "../featureStack/modules/actions";

const mapDispatchToProps = {
  addFeature,
  removeFeature,
  changeFeaturePosition
};

const mapStateToProps = (state: any) => ({
  selectedFeatureStack: getSelectedFeature(state),
  selectedFeatureList: getFeatureListSelected(state),
  isMoveDownEnabled: isMoveDownEnabled(state),
  isMoveUpEnabled: isMoveUpEnabled(state),
  selectedFeatureIndex: getSelectedFeatureIndex(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureButtons);
