import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity; 
    }
    let shipping = 0;
    if ( total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 3.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    
    const tax = Math.round(total % 10).toFixed(2);
    const totalPrice = (total + shipping + Number(tax)).toFixed(2);
   
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <> 
            <div className="cart_Area">
              <h3>Order Cart Summary</h3>
                <br/>
                <h5>Items ordered:{cart.length} </h5>
                <br/><br/>
                <ul>
                    <li>Price : $ {formatNumber(total)}</li>
                    <li>Shipping & Handling : $ {shipping}</li>
                    <li>Total before tax : $ {totalPrice}</li>
                    <li>Estimated Tax : $ {tax}</li>
                    <li className="total_order_List">Order Total : $ {totalPrice}</li>
                </ul><br/>
                {
                    props.children
                }
            </div>      
        </>
    );
};

export default Cart;