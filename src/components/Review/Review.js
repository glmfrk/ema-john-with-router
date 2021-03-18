import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewIteam from '../ReviewIteam/ReviewIteam';
import './Review.css';
import happyImage from '../../images/giphy.gif';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        })
        setCart(cartProducts);
    }, []);
        let thankYou;
        if (orderPlaced) {
            thankYou  = <img src={happyImage} alt="Thank You" />
        }

    return (
        <div className="twink_container">
           <div className="product_container">
           {
                cart.map(pd => <ReviewIteam 
                    removeProduct = {removeProduct}
                    key ={pd.key}
                    product ={pd}></ReviewIteam>)
            }
            {thankYou}
           </div>
           <div className="cart_container">
               <Cart cart={cart}>
                    <button onClick ={handlePlaceOrder} className="add_cart">Place Order</button>
               </Cart>
           </div>
        </div>
    );
};

export default Review;