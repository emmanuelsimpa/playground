import { cartActionTypes } from "./cartTypes"

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEMS,
    payload: item
})

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEMS,
    payload: item
})

export const reduceItem = item => ({
    type: cartActionTypes.REDUCE_ITEMS,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})