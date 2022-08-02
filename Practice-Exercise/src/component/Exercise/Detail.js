import React from 'react';
import {useLocation, useNavigate} from "react-router-dom"

function Detail() {
    const navigate = useNavigate()
    const {state} = useLocation();
    return (
        <div>
            <h1>Detail</h1>
            <h2>Name: {state.name}</h2>
            <h2>Age: {state.age}</h2>
            <button onClick={()=> navigate(-1)}>Back</button>
        </div>
    );
}

export default Detail;