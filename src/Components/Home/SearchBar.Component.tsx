import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const SearchBar: React.FC = (props:any) => {
	const [selector, setSelector] = useState("artists")

	const searchArtists = (artistQuery: string) => {
		props.searchArtists(artistQuery)
	}

	const searchSongs = (songQuery: string) => {
		props.searchSongs(songQuery)
	}

	const handleSelectorChagne = (e:any) => {
		props.clearScreen()
		setSelector(e.target.value)
	}

	const handleLogout = () => {
		delete localStorage.access_token
	}

	return (
		<div className="search-bar flex-container">
			<div className="top-bar flex-container">
				<h2>SpotAPI</h2>
				<NavLink onClick={() => handleLogout()} to="/login">Log out</NavLink>
			</div>
            <div className="controls flex-container">
				<div className="selector flex-container">
					<label className="flex-container">
						<input
							type="radio"
							name="selector"
							value="artists"
							checked={selector === "artists"}
							onChange={handleSelectorChagne}
						/>
						<span>Artists</span>
					</label>
					<label className="flex-container">
						<input
							type="radio"
							value="songs"
							checked={selector === "songs"}
							onChange={handleSelectorChagne}
							name="selector"
						/>
						<span>Songs</span>
					</label>
				</div>
                <div className={`control flex-container ${(selector === "artists") ? "" : "gone" }`}>
					<input 
						type="text"
						placeholder="Search Artists"
						onChange={e => searchArtists(e.target.value)}
					/>
                </div>
                <div className={`control flex-container ${(selector === "songs") ? "" : "gone" }`}>
					<input 
						type="text"
						placeholder="Search Songs"
						onChange={e => searchSongs(e.target.value)}
					/>
                </div>
            </div>
		</div>
	)
}

SearchBar.propTypes = {
	tokens: PropTypes.object
}

export default SearchBar