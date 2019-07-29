import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ArtistBrowser from '../Artists/ArtistBrowser.Container'
import SongBrowser from '../Songs/SongBrowser.Container'
import SearchBar from './SearchBar.Container'

const Home: React.FC = (props:any) => {

	useEffect(() => {
		const path = window.location.hash

		if (path) {
			const tokens = path.substr(1).split("&").reduce((obj: any, item: string) => {
				const
					keyValArr = item.split("="),
					key = decodeURIComponent(keyValArr[0])

				obj[key] = keyValArr[1]
				return obj
			}, {})

			localStorage.setItem("access_token", tokens.access_token)
			window.location.href = window.location.origin + "/home"
		}
	}, [])

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