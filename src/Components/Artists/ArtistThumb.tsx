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
			{(imageUrl) ? <img src={imageUrl} alt={props.artist.name} /> : <div className="blank-block" />}
			{props.artist.name}
			<div className="flex-spacer" />
		</NavLink>
	)
}

export default ArtistThumb