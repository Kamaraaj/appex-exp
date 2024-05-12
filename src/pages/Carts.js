import React, { useContext } from 'react'
import { cartContextVal } from '../utilities/CartContext'
import Header from '../components/Header'
import Cart from '../components/Cart'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carts = () => {
    const { cart, setCart } = useContext(cartContextVal)

    return (
        <main className=' bg-[#A7D7C580] min-h-screen'>
            <div className='mb-2'>
                <Header />
            </div>
            <section className=' py-6 px-8'>
                <div className='bg-[#FFF] rounded-[8px] shadow-2xl min-h-[80vh] p-6 max-w-[50vw] mx-auto'>
                    <div className='flex justify-between items-center mb-6'>
                        <h3 className='text-[18px] font-bold'>Shopping Cart</h3>
                        {(cart?.length > 0) && <button type='button' onClick={() => { setCart([]); toast.info('All itesm removed from cart') }} className='font-medium text-[#fc0352]'>Remove all</button>}
                    </div>
                    {
                        (cart?.length > 0) ? (
                            <div className='flex flex-col space-y-3'>
                                {cart.map(eachCart => <Cart eachCart={eachCart} key={eachCart.Code} />)}
                            </div>
                        ) : (
                            <div className='flex items-center justify-center'>
                                <p>{cart.legnth}</p>
                                No data found
                            </div>
                        )
                    }
                </div>
            </section>
        </main>
    )
}

export default Carts
