import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SongThumb from './SongThumb'

interface Props {
	songs: any,
	handlePag: any,
}

// provides list of songs in the search query

const SongBrowser: React.FC<Props> = ({ songs, handlePag }) => {

	const showSongList = () => {
		if (!!songs.songs) {
			return (
                <div>
					<h3 className="category-header">Songs</h3>
					{songs.songs && songs.songs.map( (song:any, key:number) => <SongThumb key={`song_${key}`} song={song} />)}
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
				{(songs.previous) ? <button onClick={() => handlePag(songs.previous, "songs")} >Previous</button> : ""}
				<div className="flex-spacer" />
				{(songs.next) ? <button onClick={() => handlePag(songs.next, "songs")} >Next</button> : ""}
			</div>
		)
	}

	return (
		<div>
			{showSongList()}
		</div>
	)
}

SongBrowser.propTypes = {
	songs: PropTypes.object,
	handlePag: PropTypes.func
}

export default SongBrowser