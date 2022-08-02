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
import Home from "./component/Practice/Home";
import About from "./component/Practice/About";
import Contact from "./component/Practice/Contact";
import Router1 from "./component/Practice/Router1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />}>
                    <Route path="/router1" element={<Router1/>}>
                        <Route path="home" element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="contact" element={<Contact/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
