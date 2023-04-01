import { Link, useNavigate } from "react-router-dom";
// import logo from "../../media/buybuddy-logo.png";
import "./Nav.css";
import { useRef, useState } from "react";
// Nav Bar
function Nav(props) {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hiddend");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  // added a state variable showMenu that toggles the visibility of the links when the menu button is clicked
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const navRef = useRef();
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = props;
  const handleClick = () => {
    window.localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
    navRef.current.classList.toggle("responsive_nav");
  };
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <div className="nav-wrapper">
      <div className="navbar">
        <div className="logo-wrapper">
          {/* <img src={logo} alt="Logo" className="logo-img" /> */}
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {/* to do: menu icon toggles into an 'x and for auth-buttons to go into hamburger menu when minimised' */}
          {showMenu ? "Close" : "Menu"}
        </button>
        <div className={`links ${showMenu ? "show" : ""}`}>
          <a href="#howitworks">How it works</a>
          <a href="#faq">FAQ</a>
          <a href="#">Team</a>
          <a href="#">Contact</a>
        </div>
        <div className={`auth-buttons ${showMenu ? "show" : ""}`}>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
}
export default Nav;
