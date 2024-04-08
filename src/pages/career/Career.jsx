import React, { useEffect, useState } from 'react'
import Navbar from '../shared/navbar/Navbar'
import Careers from './Careers'

const Career = () => {

const[item,setItem]=useState([])
useEffect(()=>{

fetch('data.json')
.then(res=>res.json())
.then(data =>setItem(data))



},[])




  return (
    <div>
    <Navbar></Navbar>
      Career...


<div>

{item.map(item=> <Careers item={item}></Careers>)}

</div>

    </div>
  )
}

export default Career
