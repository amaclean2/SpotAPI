import React from "react";
import PropTypes from "prop-types";

interface Props {
  song: any;
}

// individual song thumbnails

const SongThumb: React.FC<Props> = ({ song }) => {
  return (
    <div className="song-thumb flex-container">
      <div className="song-meta flex-container">
        <span className="song-title">{song.name}</span>
        <div className="sub-headers flex-container">
          <span className="song-artist">{song.artist}</span>
          <span className="song-album">{song.album}</span>
        </div>
      </div>
      <img src={song.image} alt={song.name} />
    </div>
  );
};

SongThumb.propTypes = {
  song: PropTypes.object,
};

export default SongThumb;
