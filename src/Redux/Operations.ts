import * as actions from './Actions'

const baseString = "https://api.spotify.com/v1"
const access_token = localStorage.getItem("access_token") || ""

// @desc api call to get songs in a search query
// @param query if it is the initial query
// @param paginateStr if it is a paginated search query

export const searchSongs: Function = (query: string | null, paginageStr?: string) => {
    return (dispatch: Function) => {
        query = query && query.replace(" ", "%20")
        const searchStr = (paginageStr) ? paginageStr : `${baseString}/search?type=track&q=${query}`
        dispatch(actions.requestSongs())
        fetch(searchStr, {
			method: "GET",
			headers: new Headers({
				"Authorization": `Bearer ${access_token}`
			})
        }).then(resp => {
            if (resp.status === 401)
                delete localStorage.access_token
            return resp.json()
        }).then(data => {
            data = data && data.tracks || {}
            data.items = data && data.items && data.items.map( (item:any) => ({
                name: item.name,
                image: item.album.images[2] && item.album.images[2].url,
                id: item.id,
                album: item.album.name,
                artist: item.artists[0].name
            }))
            dispatch(actions.clearArtists())
            dispatch(actions.receiveSongs(data))
        }).catch(console.error)
    }
}

// @desc clears all data from the redux store

export const clearScreen: Function = () => {
    return (dispatch: Function) => {
        dispatch(actions.clearArtists())
        dispatch(actions.clearSongs())
    }
}

// @desc api call to get artists in a search query
// @param query if it is the initial query
// @param paginateStr if it is a paginated search query

export const searchArtists: Function = (query: string | null, paginateStr?: string) => {
    return (dispatch: Function) => {
        query = query && query.replace(" ", "%20")
        const searchStr = (paginateStr) ? paginateStr : `${baseString}/search?type=artist&q=${query}`
        dispatch(actions.requestArtists())
        fetch(searchStr, {
			method: "GET",
			headers: new Headers({
				"Authorization": `Bearer ${access_token}`
			})
        }).then(resp => {
            if (resp.status === 401)
                delete localStorage.access_token
            return resp.json()
        }).then(data => {
            data = data.artists
            data.items = data.items.map( (item:any) => ({
                name: item.name,
                image: item.images[2] && item.images[2].url,
                id: item.id
            }))
            dispatch(actions.clearSongs())
            dispatch(actions.receiveArtists(data))
        }).catch(console.error)
    }
}

// @desc api call to get the data for the artist profile
// @param artistId for the artist

export const getArtist: Function = (artistId: string) => {
    return (dispatch: Function) => {
        dispatch(actions.requestArtist())
        fetch(`${baseString}/artists/${artistId}`, {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${access_token}`
            })
        }).then(resp => {
            if (resp.status === 401)
                delete localStorage.access_token
            return resp.json()
        }).then(data => {
            dispatch(actions.receiveArtist(data))
        }).catch(console.error)
    }
}

// @desc api call to get the top track data for the artist profile
// @param artistId for the artist

export const getTopTracks: Function = (artistId: string) => {
    return (dispatch: Function) => {
        dispatch(actions.requestTopTracks())
        fetch(`${baseString}/artists/${artistId}/top-tracks?country=US`, {
            method: "GET",
            headers: new Headers({
			    "Authorization": `Bearer ${access_token}`
            })
        }).then(resp => {
            if (resp.status === 401)
                delete localStorage.access_token
            return resp.json()
        }).then(data => dispatch(actions.receiveTopTracks(data)))
        .catch(console.error)
    }
}