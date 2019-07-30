import React from 'react'
import PropTypes from 'prop-types'
import ArtistThumb from './ArtistThumb'

interface Props {
	artists:any,
	handlePag:any
}

const ArtistBrowser: React.FC<Props> = ({ artists, handlePag }) => {
	
	const showArtistList = () => {
		if (!!artists.artists) {
			return (
				<div>
					<h3 className="category-header">Artists</h3>
					{artists.artists && artists.artists.map( (artist:any, key:number) => <ArtistThumb key={`artist_${key}`} artist={artist} />)}
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
				{(artists.previous) ? <button onClick={() => handlePag(artists.previous, "artists")} >Previous</button> : ""}
				<div className="flex-spacer" />
				{(artists.next) ? <button onClick={() => handlePag(artists.next, "artists")} >Next</button> : ""}
			</div>
		)
	}

	return (
		<div>
			{showArtistList()}
		</div>
	)
}

ArtistBrowser.propTypes = {
	artists: PropTypes.object,
	handlePag: PropTypes.func
}

export default ArtistBrowser