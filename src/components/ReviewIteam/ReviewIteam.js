import React from 'react';
import './ReviewIteam.css';

const ReviewIteam = (props) => {
    console.log(props);
    const {name,quantity,price,key} = props.product;
    return (
        <>
            <div className="review_Iteams_Area">
                <div className="review_Iteam">
                    <h2 className="product_name">{name}</h2>
                    <br/>
                    <p> Quantity: {quantity}</p><br/>
                    <p>Price : ${price}</p>
                    <button 
                        onClick ={() => props.removeProduct(key)}
                        className="add_cart">
                    Remove Iteam</button>
                </div>
                
            </div>
        </>
    );
};

export default ReviewIteam;