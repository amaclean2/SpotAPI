import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

const baseString:string = "https://api.spotify.com/v1"

const ArtistPage = (props:any) => {
    const
        [artist, setArtist] = useState()

    useEffect(() => {
        const
            tokenStr:string = localStorage.getItem("tokens") || "",
            tokens:any = JSON.parse(tokenStr),
            headers:Headers = new Headers({
			    "Authorization": `${tokens.token_type} ${tokens.access_token}`
            })
        
        fetch(`${baseString}/artists/${props.match.params.id}`, {
            method: "GET",
            headers
        }).then(resp => resp.json())
        .then(data => setArtist(data))
        .catch(console.error)
    }, [])

    const showArtistDetails:any = () => {
        console.log(artist)
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
                    <NavLink to="/artists">Back to Artists</NavLink>
                </div>
            ) : ""
    }

	return (
        <div>
            {showArtistDetails()}
        </div>
    )
}

export default ArtistPage