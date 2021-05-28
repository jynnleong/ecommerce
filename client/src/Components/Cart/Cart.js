import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct";
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({removeProductFromCart, cartProducts, toggleCart, showCart, updateCart, cartQuantity, cartTotal}) => {
    
    let cartClass = ["cart"];

    if(showCart){
        cartClass.push("showCart");
    }

    let cartFooterClass = ["cart-footer"];

    if(cartProducts.length === 0){
        cartFooterClass.push("empty-cart");
    }
    

    return(
        <div className={cartClass.join(" ")}>
            <div className="cart-header">
                <div className="cart-title">In Cart: {cartQuantity}</div>
                <div className="cart-header-exit-icon">
                    <a onClick={toggleCart}><i className="far fa-times-circle"></i></a>
                </div>
            </div>
            <div className="cart-body">
                {
                    cartProducts.length === 0 ? <h1 className="cart-body-noproducts">No products in cart</h1> : 
                    cartProducts.map(product => (
                        <CartProduct stock={product.stock} updateCart={updateCart} removeProductFromCart={removeProductFromCart} id={product._id} name={product.name} price={product.price} image={product.image} quantity={product.quantity}/>
                    ))
                }
            </div>
            <div className={cartFooterClass.join(" ")}>
                <div className="cart-footer-total">
                    Cart Total: $ {cartTotal}
                </div>
                <Link to="/cart/checkout">
                    <button className="cart-footer-checkout">
                        Checkout 
                    </button>
                </Link>
            </div>
            
        </div>

    
    )
}



export default Cart;