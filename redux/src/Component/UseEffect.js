import React, { useEffect } from 'react'
import { useState } from 'react';

const UseEffect = () => {
    const [resourcetype,setResourcetype]=useState('Posts');
    const [items,setItems]=useState([])
    console.log("Render")
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
          .then(response => response.json())
          .then(json => setItems(json))
        

    },[resourcetype])


const [windowwidth,setWindowwidth]=useState(window.innerWidth)
const handleResize=()=>{
    setWindowwidth(window.innerWidth)
}
useEffect(()=>{
    window.addEventListener('resize',handleResize)

})
  return (
    <>
   
       <div>
        <button onClick={()=>setResourcetype('Post')}>Post</button>
        <button onClick={()=>setResourcetype('User')}>User</button>
        <button onClick={()=>setResourcetype('Comment')}>Comment</button>
    </div>
    <h1>{resourcetype}</h1>
    {/* {items.map(item=>{
        return <pre>{JSON.stringify(item)}</pre>
    })} */}

    <div>{windowwidth}</div>
    </>
  )
}

export default UseEffect