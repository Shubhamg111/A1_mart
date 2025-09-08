import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import First from './First'
import Layout from './pages/Layout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Counter from './hooks/Counter'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Register from './pages/Register'
import ProductView from './pages/ProductView'

const Myrouter = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path='/' element={ <Layout/> } >
                <Route index element={<Homepage />} />
                <Route path='/about' element={<About/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/productdetails/:product_id' element={<ProductDetails/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/productview/:product_id' element={<ProductView/>} />

            </Route>

            <Route path='/hook' element={<Counter/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default Myrouter
