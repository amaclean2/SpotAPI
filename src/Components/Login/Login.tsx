import React, { useEffect, useState } from 'react'

const Login: React.FC = () => {
    const
        [loginString, setLoginString] = useState("")

    useEffect(() => {
        const
            responseType = "response_type=token",
            clientId = "client_id=668e28df2f574688a99805e534c1ee83",
            redirectUri = "redirect_uri=http://localhost",
            showDialog = "show_dialog=true",
            spotifyAuthPage = `https://accounts.spotify.com/authorize?${responseType}&${clientId}&${redirectUri}&${showDialog}`

        setLoginString(spotifyAuthPage)
    }, [])

    return (
        <div className="login flex-container">
            <h1>Login to SpotAPI</h1>
            {(loginString) ? <a href={loginString}>Connect to Spotify</a> : ""}
        </div>
    )
}

export default Login