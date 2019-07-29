import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const SearchBar: React.FC = (props:any) => {

	const searchArtists = (artistQuery: string) => {
		props.searchArtists(artistQuery)
	}

	const searchSongs = (songQuery: string) => {
		props.searchSongs(songQuery)
	}

	return (
		<div className="search-bar flex-container">
			<h2>Music Searcher</h2>
            <div className="controls flex-container">
				<div className="selector">
					<label>
						<input type="radio" />
						<span>Artists</span>
					</label>
					<label>
						<input type="radio" />
						<span>Songs</span>
					</label>
				</div>
                <div className="control flex-container">
					<input 
						type="text"
						placeholder="Search Artists"
						onChange={e => searchArtists(e.target.value)}
					/>
                </div>
                <div className="control flex-container">
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