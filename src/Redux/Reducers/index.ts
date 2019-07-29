import { combineReducers } from 'redux'
import { songs } from './songs'
import { artist, artists } from './artists'

const rootReducer = combineReducers({
    songs,
    artist,
    artists
})

export default rootReducer