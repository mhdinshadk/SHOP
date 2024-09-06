import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
   <section className=' bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full rounded-md' id='home'>
		<div className='relative top-24 xs:top-72 px-6 sm:px-20'> 
			<h4 className='upparcase medium-18 tracking-wider'>
				Fashoin Essantial
			</h4>
			<h1 className='h1 capitalize max-w-[40rem]'>
				Upgrade Your Fashion <span className='text-secondary'>Whith Every Click.</span> Shop Today !
			</h1>
			<p className='my-5 max-w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur amet sint ipsum soluta, architecto earum,</p>
			
			{/* Buttons */}
			<div className='flex items-center gap-x-4'>
				<Link to={''} className='inline-flex items-center justify-center gap-4 p-3 bg-white rounded-xl'>
				  <div className='regular-14  leading-tight pl-4'>
					<h5 className='uppercase font-bold'>New Arrivals</h5>
					<p className='regular-14 mt-1'>!10% Off</p>
				  </div>
				  <div className='bg-primary h-10 w-10 p-1 rounded-full flexCenter'>
					<FaArrowRight />
				  </div>
				</Link>
				<Link to={''} className='inline-flex items-center justify-center gap-4 p-3 bg-tertiary text-white rounded-xl'>
				  <div className='regular-14  leading-tight pl-4'>
					<h5 className='uppercase font-bold'>Hot Deals</h5>
					<p className='regular-14 mt-1'>!50% Offer</p>
				  </div>
				  <div className='bg-primary h-10 w-10 p-1 rounded-full flexCenter text-tertiary'>
					<FaArrowRight />
				  </div>
				</Link>
			</div>
		</div>
   </section>
  )
}

export default Hero

