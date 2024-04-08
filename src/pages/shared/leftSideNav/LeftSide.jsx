import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
/* img */
import qzone1 from '../../../assets/img/qZone1.png'
import qzone2 from '../../../assets/img/qZone2.png'
import qzone3 from '../../../assets/img/qZone3.png'

const LeftSide = () => {
  return (
    <div className='p-4'>

    <div>
    <h1 className='text-center my-4 font-extrabold text-4xl text-green-400'> Login With</h1>
    <button className="btn mb-4 text-white">
    <FcGoogle />  Login With Google
    </button> <br />
    <button className="btn text-white">
    <FaGithub />
      Login With GITHUB
    </button>
    
    
    </div>
    

<div className='text-center mt-6 text-purple-400'>

<h1 className=' font-bold text-4xl pb-4 text-green-400 font-extrabold'>Find Us On</h1>
<div className='flex items-center gap-4 border-b p-2 border-t '>
<FaFacebook />
<a href="">
Facebook</a>

</div>
<div className='flex items-center gap-4 border-b p-2 border-t'>
<FaTwitter />
<a href="">
Twitter</a>

</div>
<div className='flex items-center gap-4 border-b p-2 border-t'>
<FaInstagram />
<a href="">
Instagram</a>

</div>



</div>

<div>

<h1 className='text-center mt-7 text-4xl font-extrabold text-green-400'>Q ZONE</h1>


<img src={qzone1} alt="" className=' w-60 my-8 mx-auto' />
<img src={qzone2} alt=""  className=' w-60 my-8 mx-auto'/>
<img src={qzone3} alt=""  className=' w-60 my-8 mx-auto'/>
</div>



    </div>
  )
}

export default LeftSide
