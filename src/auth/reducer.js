import {actionTypes} from './actions'
const token = localStorage.getItem('token')

export const initialState = {
    error:null,
    loggingIn: false,
    signedUp: false,
    signingUp: false,
    signingUpError:false,
    token: (token) ? token : null,
    userInfo: null
}

export function reducer (state = initialState, action){
    switch (action.type){
        case actionTypes.LOGIN:
            return{
                ...initialState,
                loggingIn: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return{
                ...initialState,
                token: action.payload.token
            }
        case actionTypes.LOGIN_ERROR:
            return{
                ...initialState,
                error: action.payload
            }

        case actionTypes.LOGOUT:
            localStorage.removeItem('token')
            window.location.reload()
            return state

        case actionTypes.SET_PROFILE:
            return{
                ...state,
                userInfo: action.payload
            }
        case actionTypes.SIGN_UP:
            return{
                ...initialState,
                signingUp: true
            }
        case actionTypes.SIGN_UP_SUCCESS:
            return{
                initialState,
                signedUp: true
            }
        case actionTypes.SIGN_UP_ERROR:
            return{
                ...initialState,
                signingUpError: action.payload
            }
        default:
            return state
    }
}