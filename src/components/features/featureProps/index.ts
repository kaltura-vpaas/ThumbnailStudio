import { connect } from "react-redux";
import FeatureProps from "./FeatureProps";
import { getFeatureProps } from "./modules/selectors";
import { changeFeatureProperty } from "./modules/actions";

const mapDispatchToProps = {
  changeFeatureProperty
};

const mapStateToProps = (state: any) => ({
  list: getFeatureProps(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureProps);
