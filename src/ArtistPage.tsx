import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

const baseString:string = "https://api.spotify.com/v1"

interface Props {
    match: any
}

const ArtistPage: React.FC<Props> = (props) => {
    const
        [artist, setArtist] = useState(),
        [topTracks, setTopTracks] = useState()

    useEffect(() => {
        const
            access_token:string = localStorage.getItem("access_token") || "",
            headers = new Headers({
			    "Authorization": `Bearer ${access_token}`
            })
        
        fetch(`${baseString}/artists/${props.match.params.id}`, {
            method: "GET",
            headers
        }).then(resp => resp.json())
        .then(data => setArtist(data))
        .catch(console.error)

        fetch(`${baseString}/artists/${props.match.params.id}/top-tracks?country=US`, {
            method: "GET",
            headers
        }).then(resp => resp.json())
        .then(data => setTopTracks(data))
        .catch(console.error)
    }, [])

    const showArtistDetails:any = () => {
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

    const showTopTracks:any = () => {
        return (topTracks)
            ? (
                <div>
                    {topTracks.tracks.map((track:any , key:number) => (<div key={`track_${key}`}>{track.name} - {track.album.name}</div>))}
                </div>
            ) : ""
    }

	return (
        <div>
            {showArtistDetails()}
            {showTopTracks()}
            <NavLink to="/home">Back to Home</NavLink>
        </div>
    )
}

export default ArtistPage