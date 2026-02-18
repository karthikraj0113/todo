import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        dummy: 0,
    },
    reducers: {
        increment: (state) => {
            state.dummy += 1;
        },
        decrement: (state) => {
            state.dummy -= 1;
        },
        reset : (state) =>{
            state.dummy = 0;
        }
    },
});

export const { increment, decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;


