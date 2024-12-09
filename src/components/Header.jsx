import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='flex w-full justify-center text-2xl  '> <div className='w-[45%] bg-slate-900 py-3 px-11 mt-2 shadow-md shadow-slate-500 rounded-md text-white flex items-center justify-between'>

    
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">login</Link>
        <Link to="/productcreate">Productcreate</Link>
        </div>
    </div>
  )
}

export default Header