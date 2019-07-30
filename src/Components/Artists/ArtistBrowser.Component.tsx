import React from 'react'
// import PropTypes from 'prop-types'
import ArtistThumb from './ArtistThumb'

interface Props {
	artists:any,
	handlePag: Function,
}

const ArtistBrowser: React.FC<Props> = (props) => {
	
	const showArtistList = () => {
		if (!!props.artists.artists) {
			return (
				<div>
					<h3 className="category-header">Artists</h3>
					{props.artists.artists && props.artists.artists.map( (artist:any, key:number) => <ArtistThumb key={`artist_${key}`} artist={artist} />)}
					{showPag()}
				</div>
			)
		} else {
			return ""
		}
	}

	const showPag = () => {
		return (
			<div className="pagination flex-container">
				{(props.artists.previous) ? <button onClick={() => props.handlePag(props.artists.previous, "artists")} >Previous</button> : ""}
				<div className="flex-spacer" />
				{(props.artists.next) ? <button onClick={() => props.handlePag(props.artists.next, "artists")} >Next</button> : ""}
			</div>
		)
	}

	return (
		<div>
			{showArtistList()}
		</div>
	)
}

export default ArtistBrowser