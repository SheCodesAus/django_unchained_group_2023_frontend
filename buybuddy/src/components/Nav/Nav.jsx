import { Link, useNavigate } from "react-router-dom";
// import logo from "../../media/buybuddy-logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Nav.css";
import { useRef, useState } from "react";
import circletwo from "../../assets/circle 2.png";

// Nav Bar

function Nav(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { loggedIn, setLoggedIn } = props;
  const navRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    window.localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="nav__container" ref={navRef}>
      <div className="buybuddy__navbar">
        <div className="buybuddy__navbar__name">
          <img src={circletwo} className="circle__two" alt="circle__two" />
          <a href="/">BUYBUDDY</a>
        </div>
        <div className="buybuddy__navbar-links">
          <div className="buybuddy__navbar-links_container">
            <p class="hover-underline-animation">
              <Link to="/howitworks">how it works</Link>
            </p>
            <p class="hover-underline-animation">
              <Link to="/meetheteam">meet the team</Link>
            </p>
            <p class="hover-underline-animation">
              <Link to="/contact">contact us</Link>
            </p>
            <p class="hover-underline-animation">
              <Link to="/signin">sign in</Link>
            </p>
          </div>
        </div>
        <div className="buybuddy__navbar-sign">
          <p>{!loggedIn && <a href="#signin">sign in</a>}</p>
        </div>
        <div className="buybuddy__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="buybuddy__navbar-menu_container scale-up-center">
              <div className="buybuddy__navbar-menu_container-links">
                <p>
                  <a href="#howitworks">how it works</a>
                </p>
                <p>
                  <a href="">meet the team</a>
                </p>
                <p>
                  <a href="#contact">contact us</a>
                </p>
                <p>{!loggedIn && <Link to="/login">sign in</Link>}</p>
                <p>{loggedIn && <a onClick={handleClick}>sign out</a>}</p>
                <p>
                  <a href="">sign up</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Nav;
