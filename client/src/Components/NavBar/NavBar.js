import './NavBar.css';


const NavBar = ({toggleSlideBar, addedToCart, cartQuantity}) => {

     return(
         <div className="navbar">
             <div className="navbar-title">
                Ecommerce
             </div>
             <div className="navbar-products">
                <ul className="navbar-products-list">
                    
                </ul>
             </div>
             <div className="navbar-cart-hamburger">
                 <div className="navbar-cart">
                    <div className="navbar-cart-icon">
                        <a onClick={addedToCart}><i className="fas fa-shopping-cart"></i></a>
                    </div>
                    <p>{cartQuantity}</p>
                 </div>
                 <div onClick={toggleSlideBar} className="navbar-hamburger">
                     <div></div>
                     <div></div>
                     <div></div>
                 </div>
             </div>
         </div>
     )
}

export default NavBar;