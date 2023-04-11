import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="404-container">
            <div className="404-descirption">
                <h1>Oops! You seem to be lost.</h1>
                <p>Here are some helpful links:</p>
                <Link to='/'>Home</Link>
                <Link to="/how-it-works">How It Works</Link>
                <Link to="/contact-us">Contact</Link>
            </div>
        </div>
    );
};

export default NotFound;