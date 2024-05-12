import React, { useContext } from 'react'
import ShoppingCartIcon from '../assets/shoppingCartIcon.svg'
import { cartContextVal } from '../utilities/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


const Header = () => {
  const { cart } = useContext(cartContextVal)
  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove('isAuth');
    navigate('/sign-in')

  }


  return (
    <header className='bg-[#FFF] border-b p-4 flex justify-between items-center shadow-b-2xl'>
      <Link to='/' className='ml-[100px] text-[32px] font-bold leading-[32px]'>Shoppy</Link>
      <nav className='flex justify-start items-start space-x-6'>
        <Link to='/carts' className='w-[36px] h-[36px] relative'>
          <img src={ShoppingCartIcon} alt='Cart' width='100%' height='100%' className='w-full h-full' />
          <small className='absolute  bg-[#7f32e3] w-4 h-4 rounded-full top-0 right-[9px] text-[10px] text-[#FFF] text-center font-semibold '>{cart.length}</small>
        </Link>
        <button type='button' onClick={handleLogout} className='bg-blue-400 text-[#FFF] w-fit px-4 py-1 rounded-[8px] leading-[24px] '>Logout</button>
      </nav>
    </ header>
  )
}

export default Header
