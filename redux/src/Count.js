import React from 'react'

import { useDispatch } from 'react-redux'

const Count = () => {
    
   
    const dispatch = useDispatch()
    const handleDecrement = () => {
        dispatch({
            type: 'decrement',
        })
    }
        const handleIncrement = () => {
            dispatch({
                type: 'increment',
            })
        }

        return (
            <div>
                

                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
            </div>
        )
    }

    export default Count