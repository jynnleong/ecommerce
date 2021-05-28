import "./Checkout.css";
import { getProductsFromCart, updateProductsInCart, deleteProductFromCart, updateProductsStock, updateProductsStockInCart, clearCart } from "../../API/API";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CheckoutCartProduct from "../CheckoutCartProduct/CheckoutCartProduct";

const Checkout = ({name}) => {

    

    const [cartProducts, setCartProducts] = useState([]);
    const [checkoutTotal, setCheckoutTotal] = useState(0);

    const updateCheckoutProductQuantity = async (id, quantity) => {
        try {
            const updatedProduct = await updateProductsInCart(id, quantity);

            const checkoutCart = await getProductsFromCart();
            console.log(checkoutCart);

            setCartProducts(checkoutCart);

            setCheckoutTotal(0);

            for(var product in cartProducts){
                const total = cartProducts[product].quantity * cartProducts[product].price;

                setCheckoutTotal(checkoutTotal => checkoutTotal + total);
            }

        } catch (error) {
            console.error(error.message);
        }
    }

    const removeCheckoutProduct = async (id) => {
        try {
            const deletedProduct = await deleteProductFromCart(id);

            const checkoutCart = await getProductsFromCart();
            setCartProducts(checkoutCart);

            setCheckoutTotal(0);

            for(var product in cartProducts){
                const total = cartProducts[product].quantity * cartProducts[product].price;

                setCheckoutTotal(checkoutTotal => checkoutTotal + total);
            }
        } catch (error) {
            
        }
    }

    const formSubmit = async (e) => {
        alert("Form");
        

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            line2: e.target.line2.value,
            city: e.target.city.value,
            province: e.target.province.value,
            postalCode: e.target.postalcode.value,
            phoneNumber: e.target.phonenumber.value
        }

        e.target.reset();

        for(var key in cartProducts){
            await updateProductsStockInCart(cartProducts[key]._id, (cartProducts[key].stock - cartProducts[key].quantity));
            await updateProductsStock(cartProducts[key].productID, (cartProducts[key].stock - cartProducts[key].quantity));
        }

        await clearCart();
    }

    useEffect(() => {
        (async () => {
            const cartProductsList = await getProductsFromCart();
            setCartProducts(cartProductsList);

        })()
    },[]);


    return(
        <div>
            <div className="checkout">
                <div className="checkout-logo">
                    <Link to="/">Ecommerce</Link> 
                </div>
                <main className="checkout-main">
                    <div className="checkout-cart">
                        {
                            cartProducts.map(product => ( 
                                <CheckoutCartProduct productID={product._id} updateCheckoutProductQuantity={updateCheckoutProductQuantity} removeCheckoutProduct={removeCheckoutProduct} name={product.name} quantity={product.quantity} image={product.image} id={product.id} price={product.price} stock={product.stock} />
                            ))
                        }
                    </div>
                    <form onSubmit={e => {formSubmit(e)}} action="\" className="checkout-form">
                        <div className="checkout-form-information">
                            <div className="checkout-form-information-header">
                                <h2>Guest information</h2>
                                
                            </div>
                            <div className="checkout-form-name">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="" />
                            </div>
                            <div className="checkout-form-email">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="" />
                            </div>
                        </div>
                        <div className="checkout-form-shipping">
                            <div className="checkout-form-shipping-header">
                                <h3>Shipping information</h3>
                            </div>
                            <div className="checkout-form-shipping-information">
                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" id="" required={true}/>
                                <label htmlFor="line2">Line 2</label>
                                <input type="text" name="line2" id="" />
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" id="" required={true}/>
                                <label htmlFor="province">Province</label>
                                <input type="text" name="province" required={true}/>
                                <label htmlFor="postal-code">Postal Code</label>
                                <input type="text" name="postalcode" required={true}/>
                                <label htmlFor="phone-number">Phone Number</label>
                                <input type="tel" name="phonenumber" required={true} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                            </div>
                        </div>
                        <div className="checkout-form-submit">
                            <button type="submit">Checkout</button>
                        </div>
                    </form>
                </main>

            </div>
        </div>
    )
}

export default Checkout;