import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct";

const Cart = ({setProductQuantity, setIDProductDeleted, removeProductFromCart, cartProducts, toggleCart, showCart, setCartID, updateCart, cartQuantity, cartTotal}) => {
    
    let cartClass = ["cart"];

    if(showCart){
        cartClass.push("showCart");
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
                    cartProducts.map(product => (
                        <CartProduct updateCart={updateCart} setCartID={setCartID} setProductQuantity={setProductQuantity} removeProductFromCart={removeProductFromCart} setIDProductDeleted={setIDProductDeleted} id={product._id} name={product.name} price={product.price} image={product.image} quantity={product.quantity}/>
                    ))
                }
            </div>
            <div className="cart-footer">
                <div className="cart-footer-total">
                    Cart Total: $ {cartTotal}
                </div>
                <button className="cart-footer-checkout">
                    Checkout 
                </button>
            </div>
        </div>
    )
}

export default Cart;