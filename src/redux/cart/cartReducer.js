import { cartActionTypes } from "./cartTypes";
import { addItemToCart, deduceItem } from "./cartUtils";

const INITIAL_STATE = {
    hidden : true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case cartActionTypes.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case cartActionTypes.REDUCE_ITEMS:
            return {
                ...state,
                cartItems: deduceItem(state.cartItems, action.payload)
            }

        case cartActionTypes.REMOVE_ITEMS:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartActionTypes.CLEAR_CART: 
            return{
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}

export default cartReducer;