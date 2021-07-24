import { combineReducers } from 'redux'

import {
    userReducer
} from './User/user.reducers'

const rootReducers = combineReducers({
    auth: userReducer
})

export default rootReducers