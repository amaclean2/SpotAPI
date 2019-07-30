import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import SongThumb from './SongThumb'

interface Props {
	songs: any,
	handlePag: Function,
}

const SongBroser: React.FC<Props> = (props) => {

	const showSongList = () => {
		if (!!props.songs.songs) {
			return (
                <div>
					<h3 className="category-header">Songs</h3>
					{props.songs.songs && props.songs.songs.map( (song:any, key:number) => <SongThumb key={`song_${key}`} song={song} />)}
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
				{(props.songs.previous) ? <button onClick={() => props.handlePag(props.songs.previous, "songs")} >Previous</button> : ""}
				<div className="flex-spacer" />
				{(props.songs.next) ? <button onClick={() => props.handlePag(props.songs.next, "songs")} >Next</button> : ""}
			</div>
		)
	}

	return (
		<div>
			{showSongList()}
		</div>
	)
}

export default SongBroser