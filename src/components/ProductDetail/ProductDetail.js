import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import './ProductDetail.css';
import Product from '../Products/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h1> Product Details Page..</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;