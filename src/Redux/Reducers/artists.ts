import { types } from "../Types";

// artist search and artist page reducers

export const artists = (state = {}, action: any) => {
  switch (action.type) {
    case types.requestArtists:
      return {
        ...state,
        isFetching: true,
      };
    case types.receiveArtists:
      return {
        ...state,
        isFetching: false,
        artists: action.artists,
        next: action.next,
        previous: action.previous,
        total: action.total,
      };
    case types.clearArtists:
      return {
        ...state,
        artists: action.artists,
      };
    default:
      return state;
  }
};

export const artist = (state = {}, action: any) => {
  switch (action.type) {
    case types.requestArtist:
      return {
        ...state,
        isFetching: true,
      };
    case types.receiveArtist:
      return {
        ...state,
        isFetching: false,
        artist: action.data,
      };
    case types.requestTopTracks:
      return {
        ...state,
        isFetchingTracks: true,
      };
    case types.receiveTopTracks:
      return {
        ...state,
        isFetchingTracks: false,
        tracks: action.data,
      };
    default:
      return state;
  }
};
