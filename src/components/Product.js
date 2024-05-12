import React, { useContext } from 'react'
import { cartContextVal } from '../utilities/CartContext'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({ product }) => {
    const { cart, setCart } = useContext(cartContextVal)
    const addToCart = (product) => {
        setCart([...cart, { ...product, Count: 1 }])
        toast.success('Item added to the Cart')
    }
    return (
        <div className='shadow-xl hover:scale-105'>
            <div className='border rounded-[8px]'>
                <div className='h-[240px]'>
                    <img src={(product?.ProductImagePath) ? product.ProductImagePath : 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg'} loading='lazy' alt={product.ProductImageFileName} width='100%' height='100%' className='w-full h-full bg-[#FFF] object-contain rounded-t-[8px]' />
                </div>
                <div className='flex flex-col space-y-1 p-2 bg-[#f5f2eb] rounded-b-[8px]'>
                    <p className='break-all line-clamp-1'>{product.ProductName}</p>
                    <div className='flex justify-between items-center'>
                        <p>Stock Qty:{product.StockQty}</p>
                        {
                            (cart.some(item => item.Code === product.Code)) ? (
                                <Link to='/carts' className='bg-[#7f32e3] text-[#FFF] w-fit px-4 py-1 rounded-[8px] '>Cart</Link>
                            ) : (
                                <button type='button' onClick={() => addToCart(product)} className='bg-[#7f32e3] text-[#FFF] w-fit px-4 py-1 rounded-[8px] '>Add +</button>

                            )
                        }
                    </div>
                    <p>Price : Rs.{Math.floor(product.SellingCost * 83.56)}/-</p>
                </div>
            </div>
        </div>
    )
}

export default Product
