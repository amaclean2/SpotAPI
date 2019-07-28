import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [loginString, setLoginString] = useState("")
  useEffect(() => {
    const path = window.location.hash
    if(path) {
      const pathArr = path.substr(1).split("&").reduce((obj: any, item: string) => {
        const
          keyValArr: Array<any> = item.split("="),
          key: string = decodeURIComponent(keyValArr[0])

        obj[key] = keyValArr[1]
        return obj
      }, {})
      console.log(pathArr)
      fetch(`https://api.spotify.com/v1/me`, {
        method: "GET",
        headers: new Headers({
          "Authorization": `Bearer ${pathArr.access_token}`
        })
      }).then(resp => resp.json())
      .then(console.log)
      .catch(console.error)

      
    } else {
      const
      responseType = "response_type=token",
      clientId = "client_id=668e28df2f574688a99805e534c1ee83",
      redirectUri = "redirect_uri=http://localhost:3000",
      showDialog = "show_dialog=true",
      stateVar = Array(15).fill(1).reduce( str => {
        const
          upper = Math.floor(Math.random() * 26) + 65,
          lower = Math.floor(Math.random() * 26) + 97,
          decision = Math.floor(Math.random() * 2)

        return str + String.fromCharCode((decision) ? upper : lower)
      }, ""),
      state = `state=${stateVar}`,
      spotifyAuthPage = `https://accounts.spotify.com/authorize?${responseType}&${clientId}&${redirectUri}&${state}&${showDialog}`
      setLoginString(spotifyAuthPage)
    }
  }, [])
    
  return (
    <div className="App">
      {(loginString) ? <a href={loginString}>Connect to Spotify</a> : ""}
    </div>
  );
}

export default App;
