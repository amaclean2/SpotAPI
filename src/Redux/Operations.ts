import * as actions from './Actions'

const baseString = "https://api.spotify.com/v1"
const access_token = localStorage.getItem("access_token") || ""

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
        }).then(resp => resp.json())
        .then(data => {
            data = data.tracks
            data.items = data.items.map( (item:any) => ({
                name: item.name,
                image: item.album.images[0] && item.album.images[0].url,
                id: item.id,
                album: item.album.name,
                artist: item.artists[0].name
            }))
            dispatch(actions.clearArtists())
            dispatch(actions.receiveSongs(data))
        })
        .catch(console.error)
    }
}

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
        }).then(resp => resp.json())
        .then(data => {
            data = data.artists
            data.items = data.items.map( (item:any) => ({
                name: item.name,
                image: item.images[0] && item.images[0].url,
                id: item.id
            }))
            dispatch(actions.clearSongs())
            dispatch(actions.receiveArtists(data))
        })
        .catch(console.error)
    }
}

export const getArtist: Function = (artistId: string) => {
    return (dispatch: Function) => {
        dispatch(actions.requestArtist())
        fetch(`${baseString}/artists/${artistId}`, {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${access_token}`
            })
        }).then(resp => resp.json())
        .then(data => {
            dispatch(actions.receiveArtist(data))
        })
        .catch(console.error)
    }
}

export const getTopTracks: Function = (artistId: string) => {
    return (dispatch: Function) => {
        dispatch(actions.requestTopTracks())
        fetch(`${baseString}/artists/${artistId}/top-tracks?country=US`, {
            method: "GET",
            headers: new Headers({
			    "Authorization": `Bearer ${access_token}`
            })
        }).then(resp => resp.json())
        .then(data => dispatch(actions.receiveTopTracks(data)))
        .catch(console.error)
    }
}