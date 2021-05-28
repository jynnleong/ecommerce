import './Products.css';
import { useState } from 'react';
import { getProductsFromCart, addProductsToCart, updateProductsInCart } from '../../API/API';

const Products = ({name, price, stock, image, description, last, id, setCartQuantity}) => {

    let productsClass = ["products"];

    if(last){
        productsClass.push("products-noBorder");
    }

    

    let [quantityCount, setQuantityCount] = useState(1);

    const increaseQuantityCount = () => {
        setQuantityCount(quantityCount => quantityCount + 1);
    }

    const decreaseQuantityCount = () => {
        quantityCount <= 0 ? console.error("Cannot be negative") : setQuantityCount(quantityCount => quantityCount - 1);
    }
    
    const addToCart = async () => {
        if(quantityCount > stock || quantityCount <= 0){
            console.error("Cannot be more than current stock or zero");
            return;
        }

        const products = await getProductsFromCart();

        for(var key in products){
            if(products[key].name === name){
                const updateQuantity = products[key].quantity + quantityCount;
                const response = await updateProductsInCart(products[key]._id, updateQuantity, "quantity");
                console.log(response);
                setCartQuantity(cartQuantity => cartQuantity + quantityCount);
                setQuantityCount(1);
                return;
            }
        }

        const product = {
            name: name,
            price: price,
            quantity: quantityCount,
            stock: stock,
            image: image,
            productID: id
        }
        

        const response= await addProductsToCart(product);
        console.log(response);
        setCartQuantity(cartQuantity => cartQuantity + quantityCount);
        setQuantityCount(1);

    }

    let decreaseProductClass = ["products-info-stock-slider-decrease"];
    if(quantityCount === 1){
        decreaseProductClass.push("disallow-decrease");
    }
    let increaseProductClass = ["products-info-stock-slider-increase"];
    if(quantityCount === stock){
        increaseProductClass.push("disallow-increase");
    }

    if(stock === 0){
        decreaseProductClass.push("disallow-decrease");
        increaseProductClass.push("disallow-increase");
    }
    

    return(
        <div className={productsClass.join(" ")}>
            <div className="products-image">
                <img src={image} alt="Blank" />
            </div>
            <div className="products-description">
                <div className="products-info">
                    <div className="products-info-name-price">
                        <div>{name}</div>
                        <div>$ {price}</div>
                    </div>
                    <div className="products-info-stock">
                        <p className="products-info-stock-header">Quantity</p>
                        <div className="products-info-stock-slider">
                            <p onClick={decreaseQuantityCount}className={decreaseProductClass.join(" ")}>-</p>
                            <p className="products-info-stock-slider-count">{quantityCount}</p>
                            <p onClick={increaseQuantityCount} className={increaseProductClass.join(" ")}>+</p>
                        </div>
                    </div>
                </div>
                <div className="products-callToAction">
                    <button onClick={addToCart} className="products-addToCart">Add To Cart</button>
                </div>
                <div className="products-info-description">
                    <div className="products-info-description-header">Description</div>
                    <p>{description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Products;