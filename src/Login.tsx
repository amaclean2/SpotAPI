import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import PropTypes from 'prop-types'

const Login: React.FC = () => {
    const
        [loginString, setLoginString] = useState("")

    useEffect(() => {
        const
            responseType = "response_type=token",
            clientId = "client_id=668e28df2f574688a99805e534c1ee83",
            redirectUri = "redirect_uri=http://localhost:3000/home",
            showDialog = "show_dialog=true",
            spotifyAuthPage = `https://accounts.spotify.com/authorize?${responseType}&${clientId}&${redirectUri}&${showDialog}`

        setLoginString(spotifyAuthPage)
    }, [])

    return (
        <div className="login">
            {(loginString) ? <a href={loginString}>Connect to Spotify</a> : ""}
        </div>
    )
}

export default Login