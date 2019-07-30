import { types } from '../Types'

// song reducers

export const songs = (state = {}, action:any) => {
    switch(action.type) {
        case types.requestSongs :
            return {
                ...state,
                isFetching: true,
            }
        case types.receiveSongs :
            return {
                ...state,
                isFetching: false,
                songs: action.songs,
                next: action.next,
                previous: action.previous,
                total: action.total
            }
        case types.clearSongs :
            return {
                ...state,
                songs: action.songs
            }
        default :
            return state
    }
}