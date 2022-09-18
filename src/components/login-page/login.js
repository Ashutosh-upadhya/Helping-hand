import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import app, { signInWithGoogle } from "../../firebase/base";
import { AuthContext } from "../auth/auth";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer.js";
import "./login.css";
import bgimage from '../../assets/bg-star.jpg'
// import app from '../../firebase/base';
// import 'firebase/app'
// import { auth } from "firebase";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  // onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())};

  return (
    <div
      id="background"
      className="h-screen bg-gray-100 dark:bg-gray-900 transition duration-500 splash-screen dark:splash-screen-dark bg-login"
    >
      <Navbar />
      {/* <img className="bg-image" src={bgimage}/> */}
      <div className="mx-auto text-center align-middle w-min pt-32 flex">
        
        <div className="p-10 lg:p-24 transition duration-500 rounded bg-login-modal">
          <h1 className="text-5xl text-white dark:text-blue-500 font-bold mb-5 transition-all duration-500">
            <span className="text-blue-500 dark:text-white transition-all duration-500">
              Helper's
            </span>{" "}
            Hand
          </h1>
          <form onSubmit={handleLogin}>
            <input
              className="input-email font-bold placeholder-blue-500 bg-red-600 text-white dark:text-white w-60 rounded my-5 text-center"
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="input-password font-bold placeholder-blue-500 text-white dark:text-white w-60 rounded text-center mb-10"
              name="password"
              type="password"
              placeholder="Password"
            />
            <button
              className="font-bold bg-blue-400 hover:bg-blue-500 w-60 p-2 rounded transition-all duration-300"
              type="submit"
            >
              Log in
            </button>
            <p className="mt-5 font-bold text-white dark:text-white transition duration-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 cursor-pointer">
                Sign Up
              </Link>
            </p>
          </form>
          <div className="login-button google">
            {" "}
            <button
              onClick={signInWithGoogle}
              className="font-bold bg-blue-400 hover:bg-blue-500 w-60 p-2 rounded transition-all duration-300 gb-sb"
              type="submit"
            >
              <i className="fab fa-google gb-sg "></i>Sign in with google
            </button>
          </div>
        </div>
  
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Login);
