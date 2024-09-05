import React, { createContext, useEffect, useState } from 'react';
import { all_products } from '../assets/data';

export const ShopContext = createContext(null)
const ShopContextProvider = (props) => {
	const [cartItems, setcartItems] = useState({})

	const addToCart = (itemId) => {
		if(!cartItems[itemId]) {
			setcartItems((prev)=> ({...prev,[itemId]:1}));
		}else {
			setcartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
		}
	};

	const removeFromCart = (itemId) => {
		setcartItems((prev) => ({...prev,[itemId]: prev[itemId]-1}))
	}
	useEffect(()=> {
		console.log(cartItems)
	},[cartItems])

	const contextvalue = {
		all_products,
		cartItems,
		setcartItems,
		addToCart,
		removeFromCart
	}
  return (
	<ShopContext.Provider value={contextvalue}>
		{props.children}
	</ShopContext.Provider>
  )
}

export default ShopContextProvider

