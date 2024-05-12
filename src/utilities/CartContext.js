import React, { createContext, useState } from 'react'

export const cartContextVal = createContext(null)


const CartContext = ({ children }) => {
  const [cart, setCart] = useState([])
  return (
    <cartContextVal.Provider value={{ cart, setCart }} >
      {children}
    </cartContextVal.Provider>
  )
}

export default CartContext
