import { Captions,  IndianRupee, Link2 } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { add } from '../store/productSlice';

function Productcreate() {
  const [Url,setUrl]=useState();
  const [title,setTitle]=useState();
  const [price, setPrice]=useState();

  const navigate=useNavigate();
  const dispatch=useDispatch();

  function handleaddproduct(){
    if((Url && title && price) !==""){
      dispatch(add({Url, title, price}))
      navigate('/')
    }
  }
  return (
    
    <div className='flex items-center flex-col items mt-[200px] '>
        <div className='flex mt-[14px] border-2 px-2 h-12 gap-2'>
        <Link2 className='h-11'/>
        <input type="text" placeholder='URL' className='border-none outline-none' onChange={(e) => setUrl(e.target.value)}/>
        </div> 
        
        <div className='flex mt-[14px] border-2 px-2 h-12 gap-2'>
          <Captions className='h-11'/>
        <input type="text" placeholder='Title' className='border-none outline-none' onChange={(e) => setTitle(e.target.value)}/>
        </div> 

        <div className='flex mt-[14px] border-2 px-2 h-12 gap-2'>
          <IndianRupee className='h-11'/>
        <input type="text" placeholder='120' className='border-none outline-none' onChange={(e) => setPrice(e.target.value)}/>
        </div>
         <button onClick={handleaddproduct} className='mt-3 bg-black text-white text-[20px] w-[240px] h-[50px] rounded-md'>Add Product</button>
    </div>
    
  )

}

export default Productcreate