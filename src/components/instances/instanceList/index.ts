import { connect } from "react-redux";
import InstanceList from "./InstanceList";
import { State } from "./modules/reducers";
import { getInstances, getSelectedInstance } from "./modules/selectors";

import { setSelectedInstance } from "./modules/actions";

const mapDispatchToProps = {
  setSelectedInstance
};

const mapStateToProps = (state: State) => ({
  list: getInstances(state),
  selectedInstance: getSelectedInstance(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstanceList);
