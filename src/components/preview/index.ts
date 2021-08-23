import { connect } from "react-redux";
import Preview from "./Preview";
import { makePreviewUrl,makeLongUrl } from "./modules/selectors";

const mapStateToProps = (state: any) => ({
  url: makePreviewUrl(state),
  longUrl: makeLongUrl(state)
});

export default connect(mapStateToProps)(Preview);
