import './Backdrop.css';

const Backdrop = ({toggleSlideBar, toggleCartFalse, slideOut, cartBarOut}) => {

    let backdropClass = ["backdrop"];

    if(slideOut || cartBarOut){
        backdropClass.push("backdrop-pop")
    }

    const toggleSlideOptions = () =>{
        toggleSlideBar();
        toggleCartFalse();
    }

    return(
        <div onClick={toggleSlideOptions} className={backdropClass.join(" ")}>
        </div>
    )
}

export default Backdrop;