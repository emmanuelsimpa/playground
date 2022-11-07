export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)

    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemsToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem) 
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1}]
}

export const deduceItem = (cartItems, cartItemstoRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemstoRemove.id)

    if(existingCartItem.quantity === 1 ){
        return cartItems.filter(cartItem => cartItem.id !== cartItemstoRemove.id)
    }

    return cartItems.map(cartItem => cartItem.id === cartItemstoRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem) 
}