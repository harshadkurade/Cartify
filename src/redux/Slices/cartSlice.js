import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        // reducer fuctions take to input paramters state and action
        add : (state , action) =>{
            // action.payload indicates the input paramter passed in the function
            state.push(action.payload); 
        },
        remove : (state,action) => {
            return state.filter((item)=> item.id !== action.payload);
        },
    }
})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;