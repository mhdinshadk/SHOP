import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
const Order = () => {
	const {cartItems,all_products,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
	<section className='max-padd-container py-28 xl:py-32'>
		<form className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
			{/* Delivery Information */}
			<div className='flex flex-1 flex-col gap-3 text-[95%]'>
				<h4 className='bold-28 mb-4'>Delivery Information</h4>
				<div className='flex gap-3'>
					<input type='text' placeholder='FirstName' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'/>
					<input type='text' placeholder='LastName' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'/>
				</div>
				    <input type='email' placeholder='Email' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none'/>
					<input type='text' placeholder='PhoneNumber' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none'/>
					<input type='text' placeholder='Street' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none'/>
					<div className='flex gap-3'>
					<input type='text' placeholder='City' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'/>
					<input type='text' placeholder='State' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'/>
					</div>
					<div className='flex gap-3'>
					<input type='text' placeholder='ZipCode' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'/>
					<input type='text' placeholder='Country' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'/>
					</div>
					</div>
				{/* CartTotal */}
				<div className='flex flex-1 flex-col '>
				<div className='flex flex-col gap-2'>
					<h4 className='bold-22'>Summary</h4>
					<div>
						<div className='flexBetween py-3'>
							<h4 className='medium-18'>Subtotal:</h4>
							<h4 className='text-gray-30 font-semibold'>${getTotalCartAmount()}</h4>
						</div>
						<hr />
						<div className='flexBetween py-3'>
							<h4 className='medium-18'>Shipping Fee:</h4>
							<h4 className='text-gray-30 font-semibold'>${2}</h4>
						</div>
						<hr />
						<div className='flexBetween py-3'>
							<h4 className='medium-18'>Total</h4>
							<h4 className='bold-18'>${getTotalCartAmount()}</h4>
						</div>
					</div>
					<button onClick={()=> navigate('/order')} className='btn-secondary w-52 rounded'>Proceed To Cehckout</button>
				</div>
			</div>
			
		</form>
	</section>
  )
}

export default Order

