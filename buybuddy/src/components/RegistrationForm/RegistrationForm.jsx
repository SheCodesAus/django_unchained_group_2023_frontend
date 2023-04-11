import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./RegistrationForm.css";
import "../FormStyles.css";

function RegistrationForm() {
  const authToken = window.localStorage.getItem("token");
  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUsers((prevUsers) => ({ ...prevUsers, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!authToken) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(users),
        });
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      {authToken ? (
        <div className="back-up-text">
          <h2>register</h2>
          <p>
            You're already registered and logged in! Go to your{" "}
            <Link to="/dashboard">dashboard</Link>.
          </p>
        </div>
      ) : (
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <h2>register</h2>
            <p>to create your own shopping list</p>
            <div className="form-item">
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                required="required"
              />
              <label htmlFor="username">
                <span>username</span>
              </label>
            </div>
            <div className="form-item">
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                required="required"
              />
              <label htmlFor="email">
                <span>email</span>
              </label>
            </div>
            <div className="form-item">
              <input
                type="text"
                id="password"
                name="password"
                required="required"
                onChange={handleChange}
              />
              <label htmlFor="password">
                <span>password</span>
              </label>
            </div>
            <button type="submit">register</button>
            <p>
              already have an account? login <Link to="/login">here</Link>.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
