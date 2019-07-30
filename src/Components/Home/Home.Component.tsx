import React from "react";
import ArtistBrowser from "../Artists/ArtistBrowser.Container";
import SongBrowser from "../Songs/SongBrowser.Container";
import SearchBar from "./SearchBar.Container";

// main page after login

const Home: React.FC = (props: any) => {
  const handlePag = (pagStr: string, env: string) => {
    return env === "songs"
      ? props.searchSongs(null, pagStr)
      : props.searchArtists(null, pagStr);
  };

  return (
    <div>
      <SearchBar />
      <ArtistBrowser handlePag={handlePag} />
      <SongBrowser handlePag={handlePag} />
    </div>
  );
};

export default Home;
