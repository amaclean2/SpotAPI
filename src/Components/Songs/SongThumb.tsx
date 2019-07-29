import React from 'react'
// import PropTypes from 'prop-types'

interface Props {
	song:any
}

const SongThumb: React.FC<Props> = (props) => {
	return (
		<div>
			{props.song.name}
			{props.song.artist}
			{props.song.album}
			<img src={props.song.image} alt={props.song.name} />
		</div>
	)
}

export default SongThumb