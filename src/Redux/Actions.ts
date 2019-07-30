import { types } from "./Types";

export const receiveSongs = (data: any) => ({
  type: types.receiveSongs,
  songs: data.items,
  next: data.next,
  previous: data.previous,
  total: data.total,
  received_at: Date.now(),
});

export const clearSongs = () => ({
  type: types.clearSongs,
  songs: null,
  received_at: Date.now(),
});

export const requestSongs = () => ({
  type: types.requestSongs,
  received_at: Date.now(),
});

export const receiveArtists = (data: any) => ({
  type: types.receiveArtists,
  artists: data.items,
  next: data.next,
  previous: data.previous,
  total: data.total,
  received_at: Date.now(),
});

export const clearArtists = () => ({
  type: types.clearArtists,
  artists: null,
  received_at: Date.now(),
});

export const requestArtists = () => ({
  type: types.requestArtists,
  received_at: Date.now(),
});

export const requestArtist = () => ({
  type: types.requestArtist,
  received_at: Date.now(),
});

export const receiveArtist = (data: any) => ({
  type: types.receiveArtist,
  data,
  received_at: Date.now(),
});

export const requestTopTracks = () => ({
  type: types.requestTopTracks,
  received_at: Date.now(),
});
export const receiveTopTracks = (data: any) => ({
  type: types.receiveTopTracks,
  data,
  received_at: Date.now(),
});
