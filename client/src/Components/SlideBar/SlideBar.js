import "./SlideBar.css";

const SlideBar = ({showSlideBar, toggleSlideBar}) => {
    const slideBar = ["slidebar"];

    if(showSlideBar){
        slideBar.push("showSlideBar");
    }

    return(
        <div className={slideBar.join(" ")}>
            <div className="slidebar-content">
                <div className="slidebar-content-top">
                    <div className="slidebar-content-cart-login">
                        <div className="slidebar-content-login">
                            Login / Signup
                        </div>
                        <div className="slidebar-content-cart">
                            Cart
                        </div>
                    </div>
                    <div onClick={toggleSlideBar} className="slidebar-content-exit">
                        <i className="far fa-times-circle"></i>
                    </div>
                </div>
                <ul className="slidebar-content-products">
                    <li>
                        <i className="fas fa-terminal"></i>
                        <p>Computer</p>
                    </li>
                    <li>
                        <i className="fas fa-terminal"></i>
                        <p>Shirt</p>
                    </li>
                    <li>
                        <i className="fas fa-terminal"></i>
                        <p>Bottle</p>
                    </li>
                    <li>
                        <i className="fas fa-terminal"></i>
                        <p>Monitor</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SlideBar;