import { KeyRound, MailCheck } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import toast from 'react-hot-toast';

function loginpage() {
  {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handlelogin() {
      console.log(user);
      if (user.email !== email || user.password !== password) {
        return toast.error("Invalid Credentials")
      }
      dispatch(login({ email, password }));
      toast.success("Login Succesfull")
      navigate("/");
    }
    return (
      <div className='flex items-center flex-col items mt-[200px]'>
        <div>
          <Link to="/signup" className='text-blue-800 hover:underline align-left  ml-60'>Signup</Link>
          <div className='flex  mt-[14px] border-2 px-2 h-12  gap-2'>
            <MailCheck className='h-11' />
            <input type="email" className='border-none outline-none' placeholder='Example@example.com' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='flex  mt-[14px] border-2 px-2 outline-none h-11   gap-2'>
            <KeyRound className='h-11' />
            <input type="password" className='border-none outline-none' placeholder='*********' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handlelogin} className='mt-3 bg-black text-white text-[20px] w-[300px] h-[50px] rounded-md'>Login</button>
        </div>
      </div>
    )
  }
}

export default loginpage