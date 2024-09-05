import React from 'react'
import { Link } from 'react-router-dom'
import {RiDribbbleFill, RiInstagramFill,  RiTwitterFill, RiYoutubeFill} from 'react-icons/ri'

const SocialIcons = () => {
  return (
	<div className='flex gap-6 pr-4'>
	  <Link to={''} className='text-[#f83939] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
	  <Link to={''} className='text-[#eb6262] text-2xl hover:-translate-y-1 transition-all duration-500'><RiInstagramFill /></Link>
	  <Link to={''} className='text-[#38dff5] text-2xl hover:-translate-y-1 transition-all duration-500'><RiTwitterFill /></Link>
	  <Link to={''} className='text-[#f9ed69] text-2xl hover:-translate-y-1 transition-all duration-500'><RiDribbbleFill /></Link>
	</div>
  )
}

export default SocialIcons
