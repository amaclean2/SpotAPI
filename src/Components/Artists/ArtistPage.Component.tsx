import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

const ArtistPage: React.FC = (props:any) => {
    const
        [artist, setArtist] = useState(),
        [topTracks, setTopTracks] = useState()

    useEffect(() => {
        props.getArtist(props.match.params.id)
        props.getTopTracks(props.match.params.id)
    }, [props.getArtists, props.getTopTracks])

    useEffect(() => {
        setArtist(props.artist)
        setTopTracks(props.tracks)
    }, [props.artist, props.tracks])

    const showArtistDetails = () => {
        return (artist)
            ? (
                <div>
                    <h2>{artist.name}</h2>
                    <img src={artist.images[0].url} alt={artist.name} />
                    <div>
                        <span>Followers</span> <span>{artist.followers.total}</span>
                    </div>
                    <div>
                        <h4>Genres</h4>
                        {artist.genres.map( (genre:string, key:number) => <span className="genre" key={`genre_${key}`} >{genre}</span>)}
                    </div>
                </div>
            ) : ""
    }

    const showTopTracks = () => {
        return (topTracks && topTracks.tracks)
            ? (
                <div>
                    {topTracks.tracks.map((track:any , key:number) => (<div key={`track_${key}`}>{track.name} - {track.album.name}</div>))}
                </div>
            ) : ""
    }

	return (
        <div>
            <NavLink to="/home">Back to Home</NavLink>
            {showArtistDetails()}
            {showTopTracks()}
        </div>
    )
}

export default ArtistPage