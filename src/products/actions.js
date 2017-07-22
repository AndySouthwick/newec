export const actionTypes = {
    LOADING: '[products] Loading',
    ADD_TO_CART: '[products] Add to cart',
    REMOVE_FROM_CART: '[products] remove from cart',
}

export function loading () {
    return {
        type: actionTypes.LOADING
    }
}
export function addToCart (ItemData) {
    return{
        type: actionTypes.ADD_TO_CART,
        payload: ItemData
    }
}
export function removeFromCart (ItemId) {
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: ItemId
    }
}
