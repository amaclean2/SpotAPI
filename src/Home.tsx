import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ArtistBrowser from './ArtistBrowser'
import { Redirect } from 'react-router-dom'

const Home = (props:any) => {
	const
		[searchQuery, setSearchQuery] = useState(""),
		[tokenAuth, setTokenAuth] = useState(new Headers()),
		[artists, setArtists] = useState(null)

	const baseString:string = "https://api.spotify.com/v1"

	useEffect(() => {
		const path:string = window.location.hash
		let tokens:any = null

		if(path) {
			tokens = path.substr(1).split("&").reduce((obj: any, item: string) => {
					const
							keyValArr: Array<any> = item.split("="),
							key: string = decodeURIComponent(keyValArr[0])

					obj[key] = keyValArr[1]
					return obj
			}, {})
			localStorage.setItem("tokens", JSON.stringify(tokens))
			window.location.href = `${window.location.origin}/home`
		} else {
			const
				tokenStr:string = localStorage.getItem("tokens") || ""

			tokens = JSON.parse(tokenStr)
		}

		setTokenAuth(new Headers({
			"Authorization": `${tokens.token_type} ${tokens.access_token}`
		}))

	}, [])

	const searchArtists = () => {
		const activeQuery = searchQuery.replace(" ", "%20")

		fetch(`${baseString}/search?type=artist&q=${activeQuery}`, {
			method: "GET",
			headers: tokenAuth
		}).then(resp => resp.json())
		.then(data => {
			setArtists(data.artists.items)
		})
		.catch(console.error)
	}

	const searchSongs = () => {
		const activeQuery = searchQuery.replace(" ", "%20")

		fetch(`${baseString}/search?type=artist&q=${activeQuery}`, {
			method: "GET",
			headers: tokenAuth
		}).then(resp => resp.json())
		.then(data => {
			setArtists(data.artists.items)
		})
		.catch(console.error)
	}

	const showArtists = () => {
		if (!!artists) {
			return <ArtistBrowser artists={artists} />
		} else {
			return ""
		}
	}

  return (<div>
		<h2>Music Searcher</h2>
		<input type="text" onChange={e => setSearchQuery(e.target.value)} />
		<button onClick={searchArtists} >Search Artists</button>
		{ showArtists() }
	</div>)
}

Home.propTypes = {
    tokens: PropTypes.object
}

export default Home