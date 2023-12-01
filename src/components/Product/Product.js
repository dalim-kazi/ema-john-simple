import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { handlerAddToCart,product } = props
    // console.log(props)  
 const {name,img,price,seller,ratings}= product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price : $ {price}</p>
            <p className='product-seller'>Seller : {seller}</p>
            <p className='product-ratings'>Ratings : {ratings}</p>
            </div>
            <div>
                <button onClick={()=> handlerAddToCart(props.product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;