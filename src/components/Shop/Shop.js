import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { LocalStorageClearBD, addToDataLoaclStorage, getAddData } from '../Utility/Fakebd';
import { Link, useLoaderData } from 'react-router-dom';
const Shop = () => {
    // const {products,count} =useLoaderData()
    const [products, setProducts]=useState([])
    const [count ,setCount]=useState(0)
    const [cart, setCart] = useState([])
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const pages = Math.ceil(count / size);
    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setProducts(data.products)
            })
    },[page,size])
    useEffect(() => {
        const storageData = getAddData()
        let saveCart = []
        const ids = Object.keys(storageData)
        fetch('http://localhost:5000/productByIds', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                for (const id in storageData) {
            const addedProduct =data.find(product =>product._id === id)
            if (addedProduct) {
                const quantity = storageData[id]
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }
        }
         setCart(saveCart)
            })
    },[products])
    const handlerAddToCart = (products) => {
        // console.log(products)
        let newCart = [];
        const exsits = cart.find(product => product._id === products._id)
        if (!exsits) {
            products.quantity = 1
            newCart = [...cart, products]
        }
        else {
            const rest = cart.filter(product => product._id !== products._id)
            exsits.quantity = exsits.quantity + 1;
            newCart =[...rest, exsits]
         }
        setCart(newCart)
        addToDataLoaclStorage(products._id)
    }
    const clearBD = () => {
        setCart([])
        LocalStorageClearBD()
    }
    return (
        <div className='container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
               }
            </div>
            <div className='buy-cart-container'>
                <Cart
                    clearBD={clearBD}
                    cart={cart}>
                     <button onClick={clearBD} className='clear-btn'>
                     <p> Clear Item </p>
                 </button>
                    <Link to="/Orders">
                        <button className='review-btn'>
                            <p>Review Order</p>
                        </button>
                    </Link>
                    </Cart>
            </div>
            <div className='pagination mx-auto'>
                <h1>{page}-{size}</h1>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                         className={page===number && 'select'}
                        onClick={()=>setPage(number)}
                    >
                        {number+1}
                    </button>)
                }
                {
                    <select onClick={event=>setSize(event.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                }
            </div>
        </div>
    );
};

export default Shop;