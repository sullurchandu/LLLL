import {createReducer} from '@reduxjs/toolkit'


const initialState={
    count:0,
}
export const Myreducer=createReducer(initialState,{
    increment:(state)=>{
        state.count=state.count+1
    },
    decrement:(state)=>{
        state.count=state.count-1
    }


})