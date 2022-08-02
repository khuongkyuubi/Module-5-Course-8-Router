import React from 'react';
import {useParams , useLocation} from "react-router-dom";


function Product3() {
    const {state} = useLocation();
    const {categoryId} = state;
    console.log(categoryId)
    return (
        <div>
            <h1>Product id selected {categoryId}</h1>
        </div>
    );
}

export default Product3;