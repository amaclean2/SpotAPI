import { connect } from "react-redux";
import ArtistPage from "./ArtistPage.Component";
import { getArtist, getTopTracks } from "../../Redux/Operations";

// maps redux to artist page

const mapStateToProps = (state: any) => ({
  artist: state.artist.artist,
  tracks: state.artist.tracks,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getArtist: (artistId: string) => dispatch(getArtist(artistId)),
  getTopTracks: (artistId: string) => dispatch(getTopTracks(artistId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage);
