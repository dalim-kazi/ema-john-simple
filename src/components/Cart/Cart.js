
import './Cart.css'
const Cart = ({ cart, clearBD, children }) => {
    let total = 0
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price* product.quantity;
        shipping = shipping + product.shipping
    }
      const tax = total * 0.1
      const grandTotal = total + shipping + tax;
    return (
        <div className='cart-container'>
            <h1 className='text-2xl text-green-500 mb-5 text-center'>Order Summary</h1>
           <p>Select Item : {quantity}</p>
            <p>Total price : ${total}</p>
            <p>Shipping : ${shipping}</p>
            <p>Total Tax :${tax.toFixed(2)}</p>
            <h5 className='text-lg'>Grand Total :${grandTotal.toFixed(2)}</h5>
            {children}
            <div>
                {/* <button onClick={clearBD} className='clear-btn'>
                    <p> Clear Item </p>
                </button> */}
            </div>
        </div>
    );
};

export default Cart;