import React from 'react'
import Header from '../shared/headear/Header'
import LeftSide from '../shared/leftSideNav/LeftSide'
import {useParams} from 'react-router-dom'
const NewsPages = () => {
    const {id}=useParams()
  return (
    <div>
    <Header></Header>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
<div>
<h1>NEWS DETAIL</h1>
<p>{id}</p>
</div>
<div>
<LeftSide></LeftSide>

</div>      
      </div>
    </div>
  )
}

export default NewsPages
