import React from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

interface Props {
	artist:any
}

const ArtistThumb: React.FC<Props> = (props) => {
	const imageUrl = props.artist.image

	return (
		<NavLink to={`/artist/${props.artist.id}`} className="artist-thumb flex-container">
			<img src={imageUrl} alt={props.artist.name} />
			{props.artist.name}
			<div className="flex-spacer"></div>
		</NavLink>
	)
}

export default ArtistThumb