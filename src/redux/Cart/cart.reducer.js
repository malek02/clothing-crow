import { Useractiontypes } from './cart.type';
import {addItemtoCard} from './cart.action';



const INITIAL_STATE = {
    hidden: true,
    cartItems:[]

};


const cartReducer = (state = INITIAL_STATE, action) => { ////see this after
    switch (action.type) {
        case Useractiontypes.SET_CART_USER:
            return {
                ...state ,
                    hidden : !state.hidden
            };
            case Useractiontypes.ADD_ITEM:
            return {
                ...state ,
                    cartItems : addItemtoCard(state.cartItems, action.payload)
            }

        default:
            return state;
    }
};
export default cartReducer;