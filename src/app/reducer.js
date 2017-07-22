import { combineReducers } from 'redux'

import client from '../client'

import * as authReducer from '../auth/reducer'

export const initialState = {
    auth: authReducer.initialState
}

export const reducer = combineReducers({
    apollo: client.reducer(),
    auth: authReducer.reducer
})