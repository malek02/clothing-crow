import {Useractiontypes } from './cart.type';




export const setCartUser = cart => ({
    type: Useractiontypes.SET_CART_USER 
    
});

export const addItem = items => ({   ///this item here whats mean from the other in the component
    type: Useractiontypes.ADD_ITEM,
    payload: items
    
});

export const addItemtoCard =(cartItems,cartItemtoadd)=>{ 
    
const existingCartItem = cartItems.find(cartItem=> cartItem.id === cartItemtoadd.id);

    if (existingCartItem){
        return cartItems.map(cartItem=> cartItem.id===cartItemtoadd.id
            
            ? {...cartItem, quantity:cartItem.quantity+1}  ///to see              
            : cartItem )};
           
    return ([...cartItems, {...cartItemtoadd, quantity:1}]);
};
