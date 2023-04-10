import { Link, useNavigate } from "react-router-dom";
// import logo from "../../media/buybuddy-logo.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./Nav.css";
import { useRef, useState } from "react";



// Nav Bar

function Nav(props) { 
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav__container">
      <div className="buybuddy__navbar">
        <div className="buybuddy__navbar-links_logo">
          {/* <img src={logo} /> */}
          {/* put logo here later */}
          <a href="#">BUYBUDDY</a></div>
        <div className="buybuddy__navbar-links">
          <div className="buybuddy__navbar-links_container">
            <p><a href="#howitworks">how it works</a></p>
            <p><a href="">meet the team</a></p>
            <p><a href="#contact">contact us</a></p>
          </div>
        </div>
        <div className="buybuddy__navbar-sign">
        <p><a href="#signin">sign in</a>sign in</p>
        </div>
        <div className="buybuddy__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="buybuddy__navbar-menu_container scale-up-center">
            <div className="buybuddy__navbar-menu_container-links">
            <p><a href="#howitworks">how it works</a></p>
            <p><a href="">meet the team</a></p>
            <p><a href="#contact">contact</a></p>
            <p><a href="">sign in</a></p>
            </div>
            <div className="buybuddy__navbar-menu_container-links-sign">
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
