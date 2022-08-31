
import React from 'react'
import { Routes, Route } from 'react-router'
import { Cart } from '../Pages/Cart/Cart'
import { Home } from '../Pages/Home/Home'
import { Product } from '../Pages/Product/Product'
import { Productdetails } from '../Pages/Productdetails/Productdetails'
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/cart' element={<Cart> </Cart>}></Route>
        <Route path='/productdetails/:id' element={<Productdetails></Productdetails>}></Route>
    </Routes>
  )
}
