import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setErrors] = useState();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [id]: value }));
  };

  const postData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_URL}api-token-auth/`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        if (response.status === 200) {
          window.localStorage.setItem("token", response.token);
          window.localStorage.setItem("username", credentials.username);
          navigate("/");
        } else {
          setErrors(Object.values(response)[0][0]);
        }
      });
    }
  };

  return (
    <div>
      {error && <h1>{error}</h1>}
      <form>
        <div>
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="enter password"
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
