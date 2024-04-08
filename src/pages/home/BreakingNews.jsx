import React from 'react'
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className='flex   bg-slate-300 rounded-lg my-5 text-black'>
<button className=' btn btn-primary'>HEADING</button>
    <Marquee speed={100} gradientColor='white blue green' pauseOnHover={true} gradient='green blue white' className='text-red-500npm install react-fast-marquee --save'>
  I can be a React component, multiple React components, or just some text.
  I can be a React component, multiple React components, or just some text.
  I can be a React component, multiple React components, or just some text.
</Marquee>

    </div>
  )
}

export default BreakingNews
