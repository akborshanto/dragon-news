import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({anews}) => {
const {thumbnail_url,title,details,_id}=anews
  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={thumbnail_url
    } alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
    
     <div>
     
{details.length>200? <p>{details.slice(0,200)}<Link to={`/anews/${_id}`} className='text-red-400 '>Read more...</Link></p>:<p>{details}</p>}
     
     </div>
      
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default NewsCard
