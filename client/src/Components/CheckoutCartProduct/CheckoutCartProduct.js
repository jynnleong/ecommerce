import './CheckoutCartProduct.css';

const CheckoutCartProduct = ({productID, name, price, quantity, stock, image, removeCheckoutProduct, updateCheckoutProductQuantity}) => {

    const totalPricePerProduct = Math.round(quantity * price);

    let cartProductInformationQuantityClass = ["checkout-cart-product-information-quantity-decrease"];

    if(quantity === 1){
        cartProductInformationQuantityClass.push("disallow-decreasing")
    }

    let cartProductInformationIncreaseQuantityClass = ["checkout-cart-product-information-quantity-increase"];

    if(quantity === stock){
        cartProductInformationIncreaseQuantityClass.push("disallow-increasing");
    }

    const increaseQuantity = () => {
        updateCheckoutProductQuantity(productID, quantity + 1);
    }

    const decreaseQuantity = () => {
        updateCheckoutProductQuantity(productID, quantity - 1);
    }

    const deleteProduct = () => {
        removeCheckoutProduct(productID);
    }
    

    return(
        <div className="checkout-cart-product">
            <div className="checkout-cart-product-image">
                <img src={image} alt={name} />
            </div>
            <div className="checkout-cart-product-information">
                <div className="checkout-cart-product-information-title">
                    {name}
                </div>
                <div className="checkout-cart-product-information-price">
                    ${price}
                </div>
                <div className="checkout-cart-product-information-quantity">
                    Quantity: 
                    <p onClick={decreaseQuantity} className={cartProductInformationQuantityClass.join(" ")}>-</p>
                    <p className="checkout-cart-product-information-quantity-display">{quantity}</p>
                    <p onClick={increaseQuantity} className={cartProductInformationIncreaseQuantityClass.join(" ")}>+</p>
                </div>
                <div className="checkout-cart-product-information-stock">
                    {
                        quantity === 0 ? <p>None in stock</p> : <p>{stock} in stock</p>
                    }
                </div>
            </div>
            <div className="checkout-cart-product-total">
                $ {totalPricePerProduct}
            </div>
            <div onClick={deleteProduct} className="checkout-cart-product-remove">
                Remove
            </div>
        </div>
    )
}

export default CheckoutCartProduct;