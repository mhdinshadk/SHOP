import React from 'react'
import logo from '../assets/logo.svg'
import profile from '../assets/profile.jpg'
const Navbar = () => {
  return (
	<div className='max-padd-container flexBetween py-2'>
	  <img src={logo} alt="" height={155} width={155} />
	  <img src={profile} alt="profileImg" height={46} width={46} className='rounded-full'/>
	</div>
  )
}

export default Navbar
