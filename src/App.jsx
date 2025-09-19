import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import Service from './pages/Service'
import Register from './pages/Register'
import Login from './pages/Login'
import MyBooking from './pages/MyBooking'
import ServiceDetail from './pages/ServiceDetail'




function App() {
  return (
    <>
    <Header />
    <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mybooking" element={<MyBooking/>} />
        <Route path="/servicedetils/:id" element ={<ServiceDetail />}/>
        <Route path="/profile" element ={<Profile />}/>
        

    </Routes>
    <Footer />



    </>
  )
}

export default App
