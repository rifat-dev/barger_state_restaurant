import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './rootReducer'

const midleware = [thunk]


const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(...midleware)
    )
);


export default store