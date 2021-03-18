import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const product = (props) => {
    // console.log(props)
const {img, name,seller,stock,price,key} = props.product;
    return (
        <div className ="product">
           <div>  
               <img src={img} alt="" srcset=""/>
           </div>
           <div className ="product_name">
               <h3><Link to={"/product/"+ key}>{name}</Link></h3>
               <br/>
               <p><small>by : {seller}</small></p>
               <br/>
               <p> ${price}</p>
               <br/>
               <p>stock only {stock} left in stock - order soon </p>
               {props.showAddToCart === true && <button onClick = {() => props.handleAddToProduct(props.product)} className="add_cart"> <FontAwesomeIcon icon={faShoppingCart} /> add cart</button>}
           </div>
        </div>
    );
};

export default product;