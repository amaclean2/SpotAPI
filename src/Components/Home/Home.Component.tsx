import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ArtistBrowser from '../Artists/ArtistBrowser.Container'
import SongBrowser from '../Songs/SongBrowser.Container'
import SearchBar from './SearchBar.Container'

const Home: React.FC = (props:any) => {

	const handlePag = (pagStr: string, env: string) => {
		return (env === "songs")
			? props.searchSongs(null, pagStr)
			: props.searchArtists(null, pagStr)
	}

	return (
		<div>
			<SearchBar />
			<ArtistBrowser handlePag={handlePag} />
			<SongBrowser handlePag={handlePag} />
		</div>
	)
}

Home.propTypes = {
	tokens: PropTypes.object
}

export default Home