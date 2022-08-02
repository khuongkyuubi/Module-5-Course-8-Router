import React from 'react';
import {Link, Outlet} from "react-router-dom";
import * as Router from "react-router-dom";

console.log(Router)

function Router1() {
    return (
        <div>
            <h2>Practice 1: Router 1</h2>
            <nav>
                <ul>
                    <li>
                        <Link to={"home"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Router1;