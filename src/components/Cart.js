import React, { useContext } from 'react'
import { cartContextVal } from '../utilities/CartContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ eachCart }) => {
    const { cart, setCart } = useContext(cartContextVal)

    const handleCartItems = (productCode, action) => {
        const tempCart = [...cart]
        tempCart.forEach((element, index) => {
            if (element.Code === productCode) {
                if (action === '+' && element.Count < element.StockQty) element.Count = element.Count + 1;
                else if (action === '-' && element.Count > 1) element.Count = element.Count - 1;
                else if (action === 'remove') {
                    tempCart.splice(index, 1);
                    toast.info('Item removed from the Cart')
                }
            }
        });
        setCart(tempCart)
    }
    return (
        <div className='flex justify-around items-center  border rounded-[8px] shadow-lg'>
            <div className='w-[80px] h-[80px]'>
                <img src={(eachCart?.ProductImagePath) ? eachCart.ProductImagePath : 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg'} loading='lazy' alt={eachCart.ProductImageFileName} width='100%' height='100%' className='w-full h-full bg-[#FFF] object-contain rounded-t-[8px]' />
            </div>
            <div className='flex flex-col space-y-1 p-2 rounded-b-[8px] min-w-[20vw] max-w-[20vw]'>
                <p className='break-all line-clamp-3'>{eachCart.ProductName}</p>
                <div className='flex justify-between items-center'>
                    <p>Stock Qty:{eachCart.StockQty}</p>
                </div>
            </div>
            <div className='flex justify-between items-center space-x-4'>
                <button type='button' onClick={() => handleCartItems(eachCart.Code, '-')} className='w-6 h-6 rounded-full bg-gray-400 text-[16px] font-semibold  leading-[14px] text-[#FFF]'>-</button>
                <p>{eachCart.Count}</p>
                <button type='button' onClick={() => handleCartItems(eachCart.Code, '+')} className='w-6 h-6 rounded-full bg-gray-400 text-[16px] leading-[14px] text-center text-[#FFF]'>+</button>
            </div>
            <div>
                <button type='button' onClick={() => handleCartItems(eachCart.Code, 'remove')} className='font-medium text-[#fc0352]'>Remove</button>
            </div>
        </div>
    )
}

export default Cart
