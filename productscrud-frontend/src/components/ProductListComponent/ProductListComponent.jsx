import './ProductListComponent.css';

import React, { useEffect, useState } from 'react';

import CardComponent from '../CardComponent/CardComponent';
import ProductService from '../../services/ProductService';

const ProductListComponent = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getAllProducts().then(response => {
            setProducts(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div className='Cards'>
            {products.map((product, index) => (
                <CardComponent key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductListComponent