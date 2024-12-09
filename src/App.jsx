import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from "./store/store";
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/loginpage'
import Homepage from './pages/homepage'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast';
import Productcreate from './pages/Productcreate';

function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
     <Header/>
     <Routes>
      
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/productcreate" element={<Productcreate />} />
       
       
     </Routes>
     </BrowserRouter>
     <Toaster/>
    </Provider>
  )
}

export default App