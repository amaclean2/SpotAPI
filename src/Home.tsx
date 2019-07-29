import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ArtistBrowser from './ArtistBrowser'
import SongBrowser from './SongBroser'

const baseString = "https://api.spotify.com/v1"

const Home: React.FC = () => {
	const
		[searchQuery, setSearchQuery] = useState(""),
		[songQuery, setSongQuery] = useState(""),
		[tokenAuth, setTokenAuth] = useState(new Headers()),
		[artists, setArtists] = useState(null),
		[songs, setSongs] = useState(null)

	useEffect(() => {
		const path = window.location.hash

		let access_token: string = ""

		if (path) {
			const tokens = path.substr(1).split("&").reduce((obj: any, item: string) => {
				const
					keyValArr = item.split("="),
					key = decodeURIComponent(keyValArr[0])

				obj[key] = keyValArr[1]
				return obj
			}, {})

			console.log(tokens)

			const access_token = tokens.access_token

			localStorage.setItem("access_token", JSON.stringify(access_token))
			window.location.href = `${window.location.origin}/home`
		} else {
			access_token = localStorage.getItem("access_token") || ""
		}

		console.log(access_token)
		setTokenAuth(new Headers({
			"Authorization": `Bearer ${access_token}`
		}))

	}, [])

	const searchArtists = () => {
		const activeQuery = searchQuery.replace(" ", "%20")

		fetch(`${baseString}/search?type=artist&q=${activeQuery}`, {
			method: "GET",
			headers: tokenAuth
		}).then(resp => resp.json())
			.then(data => {
				setArtists(data.artists.items.map((artist:any) => ({
					genres: artist.genres,
					image: artist.images && artist.images[0] && artist.images[0].url,
					name: artist.name,
					id: artist.id
				})))
			})
			.catch(err => {
				console.error(err)
				window.location.href = window.location.origin
			})
	}

	const searchSongs = () => {
		const activeQuery = songQuery.replace(" ", "%20")

		console.log(tokenAuth)

		fetch(`${baseString}/search?type=track&q=${activeQuery}`, {
			method: "GET",
			headers: tokenAuth
		}).then(resp => resp.json())
			.then(data => {
				setSongs(data.tracks.items.map((track:any) => ({
					name: track.name,
					artist: track.artists[0].name,
					album: track.album.name,
					image: track.album.images && track.album.images[0] && track.album.images[0].url
				})))
			})
			.catch(err => {
				console.error(err)
				// window.location.href = window.location.origin
			})
	}

	const showArtists = () => {
		if (!!artists) {
			return <ArtistBrowser artists={artists} />
		} else {
			return ""
		}
	}

	const showSongs = () => {
		if (!!songs) {
			return <SongBrowser songs={songs} />
		} else {
			return ""
		}
	}

	return (
		<div>
			<h2>Music Searcher</h2>
			<div>
				<input type="text" onChange={e => setSearchQuery(e.target.value)} />
				<button onClick={searchArtists} >Search Artists</button>
			</div>
			<div>
				<input type="text" onChange={e => setSongQuery(e.target.value)} />
				<button onClick={searchSongs} >Search Songs</button>
			</div>
			{showArtists()}
			{showSongs()}
		</div>
	)
}

Home.propTypes = {
	tokens: PropTypes.object
}

export default Home