import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import HomePage from './HomePage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ContactUs from './ContactUs';

function App() {

  return (
    <>
     <Router>
       <Routes>
         <Route path = '/' element = {< HomePage />} />
         <Route path='/signup' element = {< SignUp />} />
         <Route path='/signin' element = {< SignIn />} />
         <Route path='/contact us' element = {< ContactUs />} />
       </Routes>
     </Router>
    </>
  )
}

export default App
