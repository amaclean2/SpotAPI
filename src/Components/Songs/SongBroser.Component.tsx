import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import SongThumb from './SongThumb'

interface Props {
	songs: any,
	handlePag: Function,
}

const SongBroser: React.FC<Props> = (props) => {

	const showSongList = () => {
		if (!!props.songs) {
			return (
                <div>
				    {props.songs.songs && props.songs.songs.map( (song:any, key:number) => <SongThumb key={`song_${key}`} song={song} />)}
                </div>
            )
		} else {
			return ""
		}
	}

	const showPag = () => {
		return (
			<div>
				{(props.songs.prev) ? <button onClick={() => props.handlePag(props.songs.prev, "songs")} >Previous Page</button> : ""}
				{(props.songs.next) ? <button onClick={() => props.handlePag(props.songs.next, "songs")} >Next Page</button> : ""}
			</div>
		)
	}

	return (
		<div>
			<h3>Songs</h3>
			{showSongList()}
			{showPag()}
		</div>
	)
}

export default SongBroser