import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home'
import Products from '../Components/Products'
import Addproducts from '../Components/Addproducts'
import About from '../Components/About'
import Gallery from '../Components/Gallery'
import Login from '../Components/Login'
import Details from '../Components/Details'

const Roters = ({input}) => {

  return (
    <div>
          <Routes>
             <Route path='/' element={<Home input={input}></Home>}> </Route>
             <Route path='/products' element={<Products></Products>}> </Route>
             <Route path='/addproducts' element={<Addproducts></Addproducts>}></Route>
             <Route path='/about' element={<About></About>}></Route>
             <Route path='/gallery' element={<Gallery></Gallery>}></Route>
             <Route path='/login' element={<Login></Login>}></Route>
             <Route path='/cart' element={<Details></Details>}></Route>
          </Routes>
    </div>
  )
}

export default Roters
