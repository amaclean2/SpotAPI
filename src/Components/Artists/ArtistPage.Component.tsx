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
        if (artist) {
            const artistHeroImage = (artist.images[0]) ? `url(${artist.images[0].url})` : "#CCC"
            return (
                <div className="artist-meta-content">
                    <h2>{artist.name}</h2>
                    <div className="artist-hero" style={{backgroundImage: artistHeroImage}}/>
                    <div className="followers">
                        <b>Followers</b> <span>{artist.followers.total}</span>
                    </div>
                    <div className="genres">
                        <b>Genres</b> {artist.genres.map( (genre:string, key:number) => <span className="genre" key={`genre_${key}`} >{genre}</span>)}
                    </div>
                </div>
            )
        } else {
            return ""
        }
    }

    const trackThumb = (track:any, key:number) => (
        <div key={`track_${key}`} className="song-thumb track flex-container">
            <div className="song-meta flex-container">
                <span>{track.name}</span>
                <div className="sub-headers">
                    <span>{track.album.name}</span>
                </div>
            </div>
            <img src={track.album.images[2].url} alt={track.name} />
        </div>
    )

    const showTopTracks = () => {
        return (topTracks && topTracks.tracks)
            ? (
                <div className="top-tracks">
                    <h3>Popular</h3>
                    {topTracks.tracks.map((track:any , key:number) => trackThumb(track, key))}
                </div>
            ) : ""
    }

	return (
        <div className="artist-page">
            <NavLink className="back-button" to="/home">Back to Search</NavLink>
            {showArtistDetails()}
            {showTopTracks()}
        </div>
    )
}

export default ArtistPage