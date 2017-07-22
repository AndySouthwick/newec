import {actionTypes} from './actions'

export const initialState = {
    loading: true,
    productsInCart: [],
    total: 0.00,
    numberOfProductsInCart: 0
}

export function reducer (state = initialState, action){
    switch (action.type){
        case actionTypes.LOADING:
            return {
                loading: true
            }

        case actionType.ADD_TO_CART:
            return {
                ...state,
                loading: false,
                productsInCart: [...state.productsInCart, action.payload],
                numberOfProductsInCart: state.numberOfProductsInCart + 1

            }
        default:
            return state
    }
}