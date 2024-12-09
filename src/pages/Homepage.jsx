import React from 'react'
import ProductCard from '../components/ProductCard'

function homepage() {

  const products = JSON.parse(localStorage.getItem("products"));

  return (
    <div className=' w-full grid grid-cols-4 p-11 '>
      {
        products &&
        products.length > 0 ?
        products.map((product, index) => {
          return <ProductCard key={index} img={product.Url} title={product.title} price={product.price}/>
        }) : 
        <p className='text-[30px] font-serif text-pink-800 hover:underline '>No products</p>
      }
    </div> 
  )
}

export default homepage