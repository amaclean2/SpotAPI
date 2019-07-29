import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import ArtistThumb from './ArtistThumb'

const ArtistBrowser = (props:any) => {
	const [artistList, setArtistList] = useState([])

	useEffect(() => {
		setArtistList(props.artists)
	}, [props.artists])

	const showArtistList = () => {
		if (!!artistList) {
			return <div>
				{artistList.map( (artist, key) => <ArtistThumb key={`artist_${key}`} artist={artist} />)}
			</div>
		} else {
			return ""
		}
	}

	return (
		<div>
			<h3>Artists</h3>
			{ showArtistList() }
		</div>
	)
}

export default ArtistBrowser