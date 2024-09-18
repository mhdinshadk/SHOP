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

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for(const item in cartItems) {
			if(cartItems[item] >0){
				let itemInfo = all_products.find((product)=> product._id === item);
				totalAmount += itemInfo.price * cartItems[item]
			}
		}
		return totalAmount
	}

	const contextvalue = {
		all_products,
		cartItems,
		setcartItems,
		addToCart,
		removeFromCart,
		getTotalCartAmount
	}
  return (
	<ShopContext.Provider value={contextvalue}>
		{props.children}
	</ShopContext.Provider>
  )
}

export default ShopContextProvider

