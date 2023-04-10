import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

import "./LoginForm.css";

function LoginForm() {
  const [, setLoggedIn] = useOutletContext();
  const authToken = window.localStorage.getItem("token");

  //State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Hooks
  const navigate = useNavigate();

  //Actions
  const handleChange = (event) => {
    const { id, value } = event.target;

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      const { token } = await postData();
      window.localStorage.setItem("token", token);
      setLoggedIn(true);
      navigate("/dashboard");
    }
  };

  return (
    <div>
      {authToken ? (
        <div className="back-up-text">
          <h2>login</h2>
          <p>
            You're already logged in! Go to your{" "}
            <Link to="/dashboard">dashboard</Link>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-wrapper">
          <h2>login</h2>
          <div className="form-item">
            <input
              type="text"
              id="username"
              name="username"
              required="required"
              onChange={handleChange}
            />
            <label htmlFor="username">
              <span>username</span>
            </label>
          </div>
          <div className="form-item">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required="required"
            />
            <label htmlFor="password">
              <span>password</span>
            </label>
          </div>
          <button type="submit">login</button>
          <p>
            don't have an account? register <Link to="/register">here</Link>.
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginForm;

//Hooks

//Pages

//Components

//CSS
// import "./LoginForm.css";

// function LoginForm() {
//   return <div>This is the Login Form</div>;
// }

// export default LoginForm;
