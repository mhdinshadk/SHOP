import React, { useContext, useState } from 'react';
import { FaMinus, FaPlus, FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Item = ({ product }) => {
	const {cartItems,addToCart,removeFromCart} = useContext((ShopContext))
  return (
    <div className='shadow-sm rounded-2xl overflow-hidden'>
      <div className='relative group'>
        <img src={product.image} alt={product.name} className='w-full object-cover' />
        <div className='absolute bottom-3 right-3 flexCenter gap-x-2'>
          <Link to={`/product/${product._id}`} className='bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500 '>
            <FaUpRightAndDownLeftFromCenter className='text-gray-700' />
          </Link>
		  {!cartItems[product._id] ?(
			<FaPlus onClick={()=> addToCart(product._id)} className='bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer' /> ) : (
				<div className='bg-white rounded-full flexCenter gap-2'>
						<FaMinus onClick={()=> removeFromCart(product._id)} className='rounded-full h-6 w-6 p-1 mr-1 cursor-pointer' />
						<p>{cartItems[product._id]}</p>

						<FaPlus onClick={()=> addToCart(product._id)} className='rounded-full bg-secondary h-6 w-6 p-1 mr-1 cursor-pointer' />

				</div>
			
		  )}
        </div>
      </div>
      <div className='p-3'>
        <div className='flex justify-between items-center'>
          <h5 className='text-[16px] font-bold text-gray-900/50'>{product.category}</h5>
          <div className='text-secondary font-bold text-lg'>${product.price}</div>
        </div>
        <h4 className='font-medium text-lg mb-1 line-clamp-1'>{product.name}</h4>
        <p className='text-gray-600 line-clamp-2'>{product.description}</p>
      </div>
    </div>
  );
}

export default Item;
