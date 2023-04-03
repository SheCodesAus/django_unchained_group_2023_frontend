import { Link } from "react-router-dom";
import "./Footer.css";

const FooterStandardLink = ({ name, path }) => {
  return (
    <div className="text-blue-600 px-1 hover:underline">
      <Link to={path}>{name}</Link>
    </div>
  );
};

const FooterlowerLink = ({ name, path }) => {
  return (
    <div className="text-gray-600 hover:underline">
      <Link to={path}>{name}</Link>
    </div>
  );
};

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__section">
        <div className="footer__column">
          <div className="footer__title">
            <a href="#">BUYBUDDY</a>
          </div>
          <div className="footer__links">
            <ul>
              <li className="footer-li">
                <a href="#" className="footer-a">
                  how it works
                </a>
              </li>
              <li className="footer-li">
                <a href="#" className="footer-a">
                  meet the team
                </a>
              </li>
              <li className="footer-li">
                <a href="#" className="footer-a">
                  contact us
                </a>
              </li>
              <li className="footer-li">
                <a href="#" className="footer-a">
                  sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__title">
            <a href="#">social butterfly?</a>
          </div>
          <div className="footer__links">
            <ul>
              <li className="footer-li">
                <a href="#" className="footer-a">
                  github
                </a>
              </li>
              <li className="footer-li">
                <a href="#" className="footer-a">
                  shecodes
                </a>
              </li>
              <li className="footer-li">
                <a href="#" className="footer-a">
                  linkedin
                </a>
              </li>
              <li className="footer-li">
                <a href="#" className="footer-a">
                  email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer_newsletter">
            <div className="footer__title">
              <a href="#">join our newsletter</a>
            </div>
            <div className="news-wrap">
              <input
                type="text"
                placeholder="no spam, we promise"
                className="footer-input"
              ></input>
              <a href="#" className="footer-btn btn">
                submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
