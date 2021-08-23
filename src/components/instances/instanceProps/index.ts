import { connect } from "react-redux";
import InstanceProps from "./InstanceProps";
import { getInstanceProps } from "./modules/selectors";

import {
  changeInsnanceProperty,
  changeInstanceSourceActionProps
} from "./modules/actions";

const mapDispatchToProps = {
  changeInsnanceProperty,
  changeInstanceSourceActionProps
};

const mapStateToProps = (state: any) => ({
  instanceProps: getInstanceProps(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstanceProps);
