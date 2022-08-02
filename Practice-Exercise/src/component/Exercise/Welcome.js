import React from 'react';
import {useLocation} from "react-router-dom";

function Welcome() {
    const {state} = useLocation();
    return (
        <div className="App">
            <h1>Welcome {state.email}</h1>
        </div>
    );
}

export default Welcome;