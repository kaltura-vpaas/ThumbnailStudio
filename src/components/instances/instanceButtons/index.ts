import { connect } from "react-redux";
import InstanceButtons from "./InstanceButtons";
import { getSelectedInstance } from "../instanceList/modules/selectors";

import { addInstance, removeInstance } from "../instanceList/modules/actions";

const mapDispatchToProps = {
  addInstance,
  removeInstance
};

const mapStateToProps = (state: any) => ({
  selectedInstance: getSelectedInstance(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstanceButtons);
