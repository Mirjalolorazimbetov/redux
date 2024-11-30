import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./assets/pages/About";
// import Cars from './assets/pages/Cars'
import Home from "./assets/pages/Home";
import NotFound from "./assets/pages/NotFound";
import Shop from "./assets/pages/Shop";
import Shopid from "./assets/pages/Shopid";
import SignUp from "./assets/pages/SignUp";
import Layout from "./Layouts/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/SignUp" element={<SignUp />} />
                </Route>
                <Route path="*" element={<NotFound />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<Shopid />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
