import {Useractiontypes} from './user.type'



const INITIAL_STATE = {
    curentUser: null,
    
}


const userReducer = (state = INITIAL_STATE, action) => { ////see this after
    switch (action.type) {
        case Useractiontypes.SET_CURRENT_USER:
            return {

                curentUser: action.payload
            };
       
        default:
            return state;
    }
};
export default userReducer;