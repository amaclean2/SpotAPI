import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    console.log("On load")
    const
      clientID = "668e28df2f574688a99805e534c1ee83",
      clientSecret = "986008add0c747a4ac077d84de91b99b",
      encodedStr = window.btoa(`${clientID}:${clientSecret}`)

    console.log(encodedStr)

    fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: new Headers({
        "Authorization": `Basic ${encodedStr}`,
      }),
      body: JSON.stringify({
        "grant_type": "client_credentials"
      })
    }).then(resp => resp.json())
    .then(console.log)
    .catch(console.error)

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
