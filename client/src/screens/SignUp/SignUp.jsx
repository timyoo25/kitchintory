import { useState, useContext } from "react";

import { Context } from '../../Context'

import { signUp } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./SignUp.css";

const SignUp = () => {
  const history = useHistory();

  const { setUser } = useContext(Context)

  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const checkPassword = () => {
    let check = form.password === form.passwordConfirmation ? true : false;
    return check;
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    console.log(checkPassword());
    if (checkPassword()) {
      try {
        const user = await signUp(form);
        setUser(user);
        history.push("/items");
      } catch (error) {
        console.error(error);
        setForm({
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      }
    } else {
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "The passwords must match.",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    console.log(form.isError, form.errorMsg);
    if (form.isError) {
      return (
        <div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
          <div className={toggleForm}>{form.errorMsg}</div>
        </div>
      );
    } else {
      return (
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      );
    }
  };

  const { username, password, passwordConfirmation } = form;
  return (
    <Layout>
      <div className="form-container-parent">
        <div className="form-container">
          <h3>
            Sign Up Here
            <hr className="hrstyle" />
          </h3>
          <form onSubmit={onSignUp} id="sign-up-form">
            <label>Username:</label>
            <input
              required
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <label>Password:</label>
            <input
              required
              name="password"
              value={password}
              type="password"
              onChange={handleChange}
            />
            <label>Confirm Password:</label>
            <input
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              onChange={handleChange}
            />
            {renderError()}
          </form>
          <p>
            Have an account?
            <Link to="/sign-in">
              <i>Sign-In Here!</i>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
