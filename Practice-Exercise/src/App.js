import React from "react";
import {Routes, Route, Link, Outlet} from "react-router-dom";
import "./App.css";
import Router1 from "./component/Practice/Router1/Router1";


function App() {

    return (
        <div>
            <nav>
                <ul>
                    <h1>Course 8:</h1>
                    <h2>Practice</h2>
                    <li>
                        <Link to={"/"}>App</Link>
                    </li>
                    <li>
                        <Link to={"router1"}>Router 1</Link>
                    </li>
                    <li>
                        <Link to={"router2"}>Router 2 - useNavigate</Link>
                    </li>
                    <li>
                        <Link to={"router3"}>Router 3 - useLocation</Link>
                    </li>
                    <h2>Exercise</h2>
                    <li>
                        <Link to={"login"}>Login</Link>
                    </li>
                </ul>
            </nav>
            <hr/>

            <Outlet/>

        </div>
    )

}


export default App;
