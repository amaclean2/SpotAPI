import { connect } from "react-redux";
import {
  searchSongs,
  searchArtists,
  clearScreen,
} from "../../Redux/Operations";
import SearchBar from "./SearchBar.Component";

// maps redux to search bar

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  searchSongs: (query?: string, pagStr?: string) =>
    dispatch(searchSongs(query, pagStr)),
  searchArtists: (query?: string, pagStr?: string) =>
    dispatch(searchArtists(query, pagStr)),
  clearScreen: () => dispatch(clearScreen()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
