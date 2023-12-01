import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { LocalStorageClearBD, removeTobd } from '../Utility/Fakebd';

const Order = () => {
    const{products,savaCart} = useLoaderData()
    const [cart, setCart] = useState(savaCart)
    console.log(cart)
    const handlerRemoveItem = (id) => {
        const remeningItem = cart.filter(product => product._id !== id)
        setCart(remeningItem)
        removeTobd(id)
    }
    const clearBD = () => {
        setCart([])
        LocalStorageClearBD()
    }
    return (
        <div className='container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handlerRemoveItem={handlerRemoveItem}
                    ></ReviewItem>)
                } 
                {
                    cart.length === 0 && <h2 style={{color:'red',marginTop:'50px',textAlign:'center',fontSize:'20px'}}>No review item.pleace shop more  <Link style={{color:"green"}} className='underline underline-offset-4' to="/">Shop</Link></h2>
                }
            </div>
            <div className='buy-cart-container'>
                <Cart
                    clearBD={clearBD}
                    cart={cart}></Cart>
                <button style={{padding:"15px",borderRadius:"10px",border:"0", width:"80%", marginLeft:"10%", backgroundColor:"green"}}><Link style={{textDecoration:'none',color:"white",fontSize:"16px"}} to="/shipping">proceed shipping</Link></button>
            </div>
        </div>
    );
};

export default Order;