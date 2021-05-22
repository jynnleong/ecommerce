import './App.css';
import { useEffect, useState } from 'react';
import { getProducts, getProductsFromCart, deleteProductFromCart, updateProductsInCart } from './API/API';

import Product from "./Components/Product/Products";
import NavBar from "./Components/NavBar/NavBar";
import SlideBar from "./Components/SlideBar/SlideBar";
import Backdrop from "./Components/Backdrop/Backdrop";
import Cart from "./Components/Cart/Cart";

function App() {

  const [productList, setProductList] = useState([]);
  const [slideOut, setSlideOut] = useState(false);
  const [cartBarOut, setCartBarOut] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartID, setCartID] = useState("");
  const [idProductDeleted, setIDProductDeleted] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  const toggleSlideBar = () => {
    setSlideOut(!slideOut);
  }
  const toggleSlideBarFalse = () => {
    setSlideOut(false);
  }

  const toggleCart = () => {
    setCartBarOut(!cartBarOut);
  }

  const toggleCartFalse = () => {
    setCartBarOut(false);
  }

  const removeProductFromCart = async (id) => {
    const removedCartProduct = await deleteProductFromCart(id);
    console.log(removedCartProduct);

    const cartProductList = await getProductsFromCart();
    setCartProducts(cartProductList);

    setCartQuantity(0);
    setCartTotal(0);

    for(var key in cartProductList){
      setCartQuantity(cartQuantity => cartQuantity + cartProductList[key].quantity);
      setCartTotal(cartTotal => cartTotal + (cartProductList[key].quantity * cartProductList[key].price));
    }

  }

  const updateCart = async (id, quantity) => {
    const updatedCart = await updateProductsInCart(id, quantity);
    console.log(updatedCart);

    const cartProductList = await getProductsFromCart();
    setCartProducts(cartProductList);

    setCartQuantity(0);
    setCartTotal(0);

    for(var key in cartProductList){
      setCartQuantity(cartQuantity => cartQuantity + cartProductList[key].quantity);
      setCartTotal(cartTotal => cartTotal + (cartProductList[key].quantity * cartProductList[key].price));
    }
  }

  const addToCart = async () => {
    const cartProductList = await getProductsFromCart();
    setCartProducts(cartProductList);

    setCartQuantity(0);
    setCartTotal(0);

    for(var key in cartProductList){
      setCartQuantity(cartQuantity => cartQuantity + cartProductList[key].quantity);
      setCartTotal(cartTotal => cartTotal + (cartProductList[key].quantity * cartProductList[key].price));
    }

    toggleCart();
  }

  

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProductList(products);

      const cartProductList = await getProductsFromCart();
      setCartProducts(cartProductList);

      setCartQuantity(0);

      for(var key in cartProductList){
        setCartQuantity(cartQuantity => cartQuantity + cartProductList[key].quantity);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Cart cartTotal={cartTotal} updateCart={updateCart} setCartProducts={setCartProducts} cartQuantity={cartQuantity} setIDProductDeleted={setIDProductDeleted} removeProductFromCart={removeProductFromCart} cartProducts={cartProducts} toggleCart={toggleCart} showCart={cartBarOut}/>
      <Backdrop toggleSlideBar={toggleSlideBarFalse} toggleCartFalse={toggleCartFalse} slideOut={slideOut} cartBarOut={cartBarOut}/>
      <SlideBar showSlideBar={slideOut} toggleSlideBar={toggleSlideBar}/>
      <NavBar cartQuantity={cartQuantity} addedToCart={addToCart} toggleSlideBar={toggleSlideBar}/>
      <div>
      {
        productList.map((product, index) => (
          <Product className="product" setCartQuantity={setCartQuantity} key={product._id} name={product.name} description={product.description} price={product.price} stock={product.stock} image={product.image} last={index === productList.length - 1 ? true : false}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
