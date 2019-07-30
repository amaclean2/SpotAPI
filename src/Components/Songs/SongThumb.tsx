import React from 'react'
// import PropTypes from 'prop-types'

interface Props {
	song:any
}

const SongThumb: React.FC<Props> = (props) => {
	return (
		<div className="song-thumb flex-container">
			<div className="song-meta flex-container">
				<span className="song-title">{props.song.name}</span>
				<div className="sub-headers flex-container">
					<span className="song-artist">{props.song.artist}</span>
					<span className="song-album">{props.song.album}</span>
				</div>
			</div>
			<img src={props.song.image} alt={props.song.name} />
		</div>
	)
}

export default SongThumb