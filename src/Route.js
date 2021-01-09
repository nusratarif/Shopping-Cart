import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Product from './Components/Product';
import ProductItem from './Components/ProductItems';
import PageNotFound from './Components/PageNotFound';
import NavBar from './NavBar';
import ManCat from './Components/manCat';
import WomanCat from './Components/womanCat';
import KidsCat from './Components/kidsCat';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

function RouteConfig() {
    return (
        <div>
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route  path="/" element={<Home />}/>
                    <Route  path="/product" element={<Product />}/>
                    <Route  path="/product/:id" element={<ProductItem />}/>
                    <Route  path="/manCat" element = {<ManCat />} />
                    <Route  path="/manCat/:id" element={<ProductItem />}/>
                    <Route  path="/kidsCat" element = {<KidsCat />} />
                    <Route path="/kidsCat/:id" element = {<ProductItem />} />
                    <Route  path="/womanCat" element = {<WomanCat />} />
                    <Route path="/womanCat/:id" element = {<ProductItem />} />
                    <Route  path="*" element={<PageNotFound />}/>
                    <Route  path="/cart" element={<Cart />}/>
                </Routes> 
                <Footer />              
            </BrowserRouter>
        </div>
    );
}
export default RouteConfig;