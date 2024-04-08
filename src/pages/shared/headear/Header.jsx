import React from 'react'
import logo from '../../../assets/img/logo.png'
import moment from 'moment'
const Header = () => {
  return (
    <div className='text-center'>
     <div className=''>
     <img src={logo} alt="" className='mx-0 lg:mx-auto  ' />
     </div>

      <p>Journalism without favour</p>
      <p className='text-purple-400 font-mono'>{moment().format('MMMM  YYYY ')}</p>
      <p className='text-green-400 text-3xl font-serif'> Time:{moment().format('h:mm A ')}</p>
    </div>
  )
}

export default Header
