import { connect } from "react-redux";
import ArtistBrowser from "./ArtistBrowser.Component";

// maps artists redux to artists component

const mapStateToProps = (state: any) => ({
  artists: state.artists,
});

export default connect(mapStateToProps)(ArtistBrowser);
