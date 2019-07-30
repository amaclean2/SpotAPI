import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './Reducers'

const configureStore: Function = (preloadedState:any) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware)
    )
}

export default configureStore