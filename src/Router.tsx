import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ArtistPage from './ArtistPage'

const Router: React.FC = () => {
	return (
        <BrowserRouter>
            <Route exact={true} path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/artist/:id" component={ArtistPage} />
        </BrowserRouter>
    )
}

export default Router