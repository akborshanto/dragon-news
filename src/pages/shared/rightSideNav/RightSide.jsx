import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RightSide = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(datas=>setData(datas))

  },[])
  return (
    <div>

<div className='flex flex-col p-4 gap-4 '>

{
  data.map(data=> <Link to={`/data/${data.id}`}>{data.name}</Link>)
}

</div>






    </div>
  )
}

export default RightSide
