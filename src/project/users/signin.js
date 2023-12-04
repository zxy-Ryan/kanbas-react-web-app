import React, { useState } from "react";
import * as client from "./client";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // [1
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.usersReducer);
  const signIn = async () => {
    try {
      const user = await client.signIn({ username, password });
      dispatch(setCurrentUser(user));
      navigate("/project/account");
      //   console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {currentUser && (
        <div className="container">
          <h1>Sign In</h1>
          <p>You are signed in already. To sign in with another account, please sign out first.</p>
        </div>
      )}
      {!currentUser && (
        <div className="container">
          <h1>Sign In</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            value={username}
            className="form-control mb-2"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            className="form-control mb-2"
          />
          <button className="btn btn-success mb-2 me-2" onClick={signIn}>
            Sign In
          </button>
        </div>
      )}
    </>
  );
}

export default SignIn;
