import React from 'react';
import {useParams} from "react-router-dom";

function Product() {
    const {productId} = useParams();
    console.log(productId)
    return (
        <div>
            <h1>Product id selected {productId}</h1>
        </div>
    );
}

export default Product;