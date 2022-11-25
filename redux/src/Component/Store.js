import { configureStore } from '@reduxjs/toolkit'
import { Myreducer } from './Reducer'
const store=configureStore({
    reducer:{
        myreducer:Myreducer
        
    }
})
export default store