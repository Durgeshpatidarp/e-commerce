import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../store/authSlice';
import { KeyRound, Mail, UserCheck2Icon} from 'lucide-react';
import toast from 'react-hot-toast';

function Signuppage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignup() {
    dispatch(signup({ username, email, password }));
    toast.success("signup successsful")
    navigate("/login")
  }
  return (

    <div className='flex items-center flex-col items mt-[200px]'>
      <div>
        <p>Already have an account? <Link to="/login" className='text-blue-800 hover:underline align-left'>Login</Link></p>
        <div className='flex mt-[14px] border-2 px-2 h-12 gap-2 '>
          <UserCheck2Icon className='h-11'/>
          <input type="text" className='border-none outline-none ' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='flex  mt-[14px] border-2 px-2 h-12  gap-2'>
          <Mail className='h-11' />
          <input type="email" className='border-none outline-none' placeholder='Example@example.com' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='flex  mt-[14px] border-2 px-2 outline-none h-11   gap-2'>
          <KeyRound className='h-11' />
          <input type="password" className='border-none outline-none' placeholder='*********' onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <button onClick={handleSignup} className='mt-3 bg-black text-white text-[20px] w-[300px] h-[50px] rounded-md'>Signup</button>
      </div>
    </div>
  )
}

export default Signuppage