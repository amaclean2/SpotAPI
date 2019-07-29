import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import SongThumb from './SongThumb'

interface Props {
	songs: any
}

const SongBroser: React.FC<Props> = (props) => {

	const showSongList = () => {
		if (!!props.songs) {
			return (
                <div>
				    {props.songs.map( (song:any, key:number) => <SongThumb key={`song_${key}`} song={song} />)}
                </div>
            )
		} else {
			return ""
		}
	}

	return (
		<div>
			<h3>Songs</h3>
			{showSongList()}
		</div>
	)
}

export default SongBroser