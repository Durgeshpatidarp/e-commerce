import React from 'react'
import { useDispatch } from 'react-redux'
import { productdelete } from '../store/productSlice'
import { Delete } from 'lucide-react';

function ProductCard({img, title, price}) {
  
  const dispatch = useDispatch();
  function handledelete(){
    if((img && title && price) !==""){
      dispatch(productdelete({img, title, price}))
      
    }
  }
  
  return (
    <div className='flex justify-center text-[20px] border-[2px] p-2 w-[300px] '>
      <div>
        <img className='w-[300px] h-[300px] object-cover rounded-md' src={img} alt="" />
        <h2>{title}</h2>
        <p>{price}</p>
        <button className=' bg-black mt-2 text-white text-[20px] w-full h-[40px] rounded-md'>Buy Now</button>
        <button onClick={handledelete}><Delete/>Delete</button>
        </div>
    </div>
  )
}

export default ProductCard