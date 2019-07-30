import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

interface Props {
	artist: any
}

// individual artist thumbnails

const ArtistThumb: React.FC<Props> = ({ artist }) => {
	const imageUrl = artist.image

	return (
		<NavLink to={`/artist/${artist.id}`} className="artist-thumb flex-container">
			{(imageUrl) ? <img src={imageUrl} alt={artist.name} /> : <div className="blank-block" />}
			{artist.name}
			<div className="flex-spacer" />
		</NavLink>
	)
}

ArtistThumb.propTypes = {
	artist: PropTypes.object
}

export default ArtistThumb