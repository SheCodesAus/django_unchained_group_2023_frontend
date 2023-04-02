import { Link } from "react-router-dom";
import "./Footer.css"

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
                        <li class="footer-li"><a href="#" class="footer-a">how it works</a></li>
                        <li class="footer-li"><a href="#" class="footer-a">meet the team</a></li>
                        <li class="footer-li"><a href="#" class="footer-a">contact us</a></li>
                        <li class="footer-li"><a href="#" class="footer-a">sign in</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__column">
             <div className="footer__title">
                <a href="#">social butterfly?</a>
                </div>
                <div className="footer__links">
             <ul>
                        <li class="footer-li"><a href="#" class="footer-a">github</a></li>
                        <li class="footer-li"><a href="#" class="footer-a">shecodes</a></li>
                        <li class="footer-li"><a href="#" class="footer-a">linkedin</a></li>
                        <li class="footer-li"><a href="#" class="footer-a">email</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__column">
                <div className="footer_newsletter">
                    <div className="footer__title">
                        <a href="#">join our newsletter</a>
                    </div>
                        <div class="news-wrap">
                            <input type="text" placeholder="no spam, we promise" class="footer-input">
                            </input>
                            <a href="#" class="footer-btn btn">submit</a>
                         </div>
                    </div>
                </div>
        </div>
    </div>
  );
}

export default Footer;