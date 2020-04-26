import React from 'react';

const Product = ({name, price}) => 
    (
        <li
        className="products__list-item">
            <span className="products__item-name">
                {name}
            </span>
            <span className="products__item-price">
                {price}
            </span>   
        </li>
    );

export default Product;