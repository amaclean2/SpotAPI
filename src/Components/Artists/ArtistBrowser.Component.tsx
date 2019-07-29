import React from 'react'
// import PropTypes from 'prop-types'
import ArtistThumb from './ArtistThumb'

interface Props {
	artists:any,
	handlePag: Function,
}

const ArtistBrowser: React.FC<Props> = (props) => {

	console.log("ARTISTS", props.artists)
	
	const showArtistList = () => {
		if (!!props.artists) {
			return (
				<div>
					{props.artists.artists && props.artists.artists.map( (artist:any, key:number) => <ArtistThumb key={`artist_${key}`} artist={artist} />)}
				</div>
			)
		} else {
			return ""
		}
	}

	const showPag = () => {
		return (
			<div>
				{(props.artists.prev) ? <button onClick={() => props.handlePag(props.artists.prev, "artists")} >Previous Page</button> : ""}
				{(props.artists.next) ? <button onClick={() => props.handlePag(props.artists.next, "artists")} >Next Page</button> : ""}
			</div>
		)
	}

	return (
		<div>
			<h3>Artists</h3>
			{showArtistList()}
			{showPag()}
		</div>
	)
}

export default ArtistBrowser