import React from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

interface Props {
	artist:any
}

const ArtistThumb: React.FC<Props> = (props) => {
	const imageUrl = props.artist.image

	console.log(props.artist)

	return (
		<NavLink to={`/artist/${props.artist.id}`}>
			<img className="artist-thumb" src={imageUrl} alt={props.artist.name} />
			{props.artist.name}
		</NavLink>
	)
}

export default ArtistThumb