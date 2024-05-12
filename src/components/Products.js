import React from 'react'
import Product from './Product'

const Products = ({ resData }) => {
  return (
    <div>
      <div className='grid grid-cols-5 gap-x-6 gap-y-8 '>
        {resData && resData?.Result?.length > 0 && resData?.Result.map(product => <Product key={product.Code} product={product} />)}
      </div>
    </div>
  )
}

export default Products
