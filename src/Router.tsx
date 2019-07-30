import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home/Home.Container'
import Login from './Login'
import ArtistPage from './Components/Artists/ArtistPage.Container'

const Router: React.FC = () => {

    useEffect(() => {
		const path = window.location.hash

		if (path) {
			const tokens = path.substr(1).split("&").reduce((obj: any, item: string) => {
				const
					keyValArr = item.split("="),
					key = decodeURIComponent(keyValArr[0])

				obj[key] = keyValArr[1]
				return obj
			}, {})

			localStorage.setItem("access_token", tokens.access_token)
			window.location.href = window.location.origin + "/home"
		}
    }, [])

    const checkToken = (component:any) => {
        if (localStorage.getItem("access_token")) {
            return component
        } else {
            return Login
        }
    }
    
	return (
        <BrowserRouter>
            <Route exact={true} path="/" component={checkToken(Home)} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={checkToken(Home)} />
            <Route path="/artist/:id" component={checkToken(ArtistPage)} />
        </BrowserRouter>
    )
}

export default Router