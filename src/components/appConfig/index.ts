import { connect } from "react-redux";
import AppConfig from "./AppConfig";

import { setKS, setPartnerId } from "./modules/actions";
import { getKs, getPartnerId } from "./modules/selectors";

const mapDispatchToProps = {
  setKS,
  setPartnerId
};

const mapStateToProps = (state: any) => ({
  ks: getKs(state),
  partnerId: getPartnerId(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppConfig);
