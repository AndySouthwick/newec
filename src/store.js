import {createStore, applyMiddleware, compose }from 'redux'

import client from './client'

import {reducer, initialState} from './app/reducer'

export default createStore(
    reducer,
    initialState,

    compose(
        applyMiddleware(client.middleware()),
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)
