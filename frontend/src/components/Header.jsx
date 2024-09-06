import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import Navbar from './Navbar';
import { MdClose, MdMenu } from 'react-icons/md';
import { FaBasketShopping } from 'react-icons/fa6';
import { ShopContext } from '../context/ShopContext';

const Header = ({setShowLogin}) => {
	const [menuOpened,setMenuOpened] = useState(false);
	const toggleMenu = () => setMenuOpened(!menuOpened);
	// const {cartItems} = useContext(ShopContext)
  return (
	<header className='fixed right-0 left-0 mx-auto z-10'>
		<div className='px-8 bg-white'>
			<div className='flexBetween py-4 max-xs:px-2'>
				<div className='flexCenter gap-x-20'>
				{/* logo */}
				<Link to={"/"} className='bold-24'>
				  <img 	src={logo} alt='logoImg' height={77} width={77}/>
				</Link>
				{/* Navbar DeskTop */}
				<Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />

				{/* Navbar Mobile */}
				<Navbar containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300":
				"flex items-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}
				/>
			</div>
			
			{/* Buttons */}
			<div className='flexCenter gap-x-6'>
				{!menuOpened ? (
					<MdMenu onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-secondary text-2xl'/>
				):(<MdClose onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-secondary text-2xl'/>)}

				<div className='flexBetween gap-x-2 sm:gap-x-5'>
					<Link to={'/cart'} className='flex'>
					<FaBasketShopping className='text-[22px]' />
					<span className="relative flexCenter w-2  h-2 rounded-full bg-secondary text-white medium-14 -top-1"></span>
					</Link>
					<button onClick={()=> setShowLogin(true)} className='btn-outline rounded-full'>
						Login
					</button>
				</div>
			</div>
		</div>		
	</div>
	</header>
  )
}

export default Header

