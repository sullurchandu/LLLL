import React, { useEffect, useRef } from 'react'
import { useState } from 'react'



const UseRef = () => {
    const[name,setName]=useState('')
    const renderCount=useRef(0)
    useEffect(()=>{
        renderCount.current=renderCount.current+1
    })
  return (
    <>
    <input value={name} onChange={(e)=>setName(e.target.value)} />
    <div> my name is:{name}</div>
    <div>i rendered {renderCount.current} times</div>
    </>
  )
}

export default UseRef