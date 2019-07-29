import React from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

const ArtistBrowser = (props:any) => {
	const imageUrl = props.artist.images && props.artist.images[0] && props.artist.images[0].url

	return (
		<NavLink to={`/artist/${props.artist.id}`}>
			<img className="artist-thumb" src={imageUrl} alt={props.artist.name} />
			{props.artist.name}
		</NavLink>
	)
}

export default ArtistBrowser