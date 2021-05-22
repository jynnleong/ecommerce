import "./CartProduct.css";
import { useState } from 'react';
import { updateProductsInCart } from '../../API/API';

const CartProduct = ({quantity, price, image, name, id, removeProductFromCart, updateCart}) => {

    const totalPricePerProduct = Math.round(quantity * price);

    let cartProductInformationQuantityClass = ["cart-product-information-quantity-decrease"];

    if(quantity === 1){
        cartProductInformationQuantityClass.push("disallow-decreasing")
    }

    const removeProduct = () => {
        removeProductFromCart(id);
    }

    const decreasingCart = () => {
        quantity < 2 ? console.error("cannot be zero or negative") : updateCart(id, quantity - 1);
    }

    const increasingCart = () => {
        updateCart(id, quantity + 1);
    }


    return(
        <div className="cart-product">
            <div className="cart-product-image">
                <img src={image} alt={name} />
            </div>
            <div className="cart-product-information">
                <div className="cart-product-information-title">
                    {name}
                </div>
                <div className="cart-product-information-price">
                    $ {price}
                </div>
                <div className="cart-product-information-quantity">
                    <p onClick={decreasingCart} className={cartProductInformationQuantityClass.join(" ")}>-</p>
                    <p className="cart-product-information-quantity-display">{quantity}</p>
                    <p onClick={increasingCart} className="cart-product-information-quantity-increase">+</p>
                </div>
            </div>
            <div className="cart-product-total">
                $ {totalPricePerProduct}
            </div>
            <div className="cart-product-remove">
                <a onClick={removeProduct}>X</a>
            </div>
        </div>
    )
}

export default CartProduct;