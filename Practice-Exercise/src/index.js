import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./component/Practice/Router1/Home";
import About from "./component/Practice/Router1/About";
import Contact from "./component/Practice/Router1/Contact";
import Router1 from "./component/Practice/Router1/Router1";
import Router2 from "./component/Practice/Router2-useNavigate/Router2";
import Product from "./component/Practice/Router2-useNavigate/Product";
import Router3 from "./component/Practice/Router3-useLocation/Router3";
import Product3 from "./component/Practice/Router3-useLocation/Product3";
import Router1Login from "./component/Exercise/Router1Login";
import Welcome from "./component/Exercise/Welcome";
import Detail from "./component/Exercise/Detail";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}>
                    <Route path="router1" element={<Router1/>}>
                        <Route path="home" element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="contact" element={<Contact/>}/>
                    </Route>
                    <Route path="router2" element={<Router2/>}>
                        <Route path="product/:productId" element={<Product/>}/>
                    </Route>

                    <Route path="router3" element={<Router3/>}>
                        <Route path="product" element={<Product3/>}/>
                    </Route>
                    <Route path={"login"} element={<Router1Login/>}/>
                    <Route path={"welcome"} element={<Welcome/>}/>
                    <Route path={"employees/detail"} element={<Detail/>}/>
                </Route>
                <Route path={"*"} element={<h1>Not found</h1>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
