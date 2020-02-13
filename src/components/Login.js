import React, { useContext } from "react";
import auth from "../auth/service.js";
//context
import { WaterFallContext } from "../contexts/WaterfallContext";

function Login() {
  const { isLoggedIn } = useContext(WaterFallContext);

  return (
    <>
      <h2>Login</h2>

      {isLoggedIn ? (
        <button onClick={() => auth.logout()} className="log-in">
          Log Out
        </button>
      ) : (
        <button onClick={() => auth.login()} className="log-in">
          Log In
        </button>
      )}
    </>
  );
}

export default Login;
