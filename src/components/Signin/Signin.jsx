import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/user/userSlice";
import "./Signin.css";

const Signin = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === "username") {
      setUsername(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestEnding = addUsernameAndPassword(username, password);
    const data = await handleFetch(requestEnding);
    dispatch(login(data));
  };

  const addUsernameAndPassword = (userInput, passwordInput) => {
    const userLowercase = userInput.toLowerCase();
    return `${userLowercase}${passwordInput}`;
  };

  const handleFetch = async (request) => {
    let response = await fetch(`https://6l9j4.wiremockapi.cloud/${request}`);
    let data = await response
      .json()
      .catch((error) => alert(`Invalid submission: ${error}`));

    return data;
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-container">
          <h3 className="form-heading">
            Username <span>*hint: mike</span>
          </h3>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <h3 className="form-heading">
            Password <span>*hint: 123123</span>
          </h3>

          <input
            type="text"
            placeholder="Enter Password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
