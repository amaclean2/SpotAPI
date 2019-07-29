import React from 'react'
// import PropTypes from 'prop-types'
import ArtistThumb from './ArtistThumb'

interface Props {
	artists:any
}

const ArtistBrowser: React.FC<Props> = (props) => {
	console.log(props.artists)

	const showArtistList = () => {
		if (!!props.artists) {
			return (
				<div>
					{props.artists.map( (artist:any, key:number) => <ArtistThumb key={`artist_${key}`} artist={artist} />)}
				</div>
			)
		} else {
			return ""
		}
	}

	return (
		<div>
			<h3>Artists</h3>
			{showArtistList()}
		</div>
	)
}

export default ArtistBrowser