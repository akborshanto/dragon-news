import React, { useState } from 'react'

const Careers = ({item}) => {
//    console.log(item)
const [user,setUser]=useState([])


    const handleId=(id)=>{
        console.log(id)
      
    }
  return (
    <div>
      <button onClick={()=>handleId(item)}>CLICK ID</button>
      <h1>{user}</h1>
    </div>
  )
}

export default Careers
