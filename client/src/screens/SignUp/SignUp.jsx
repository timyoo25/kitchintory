import { useState } from "react";
import { signUp } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();

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
    const { setUser } = props;
    console.log(checkPassword());
    if (checkPassword()) {
      try {
        const user = await signUp(form);
        setUser(user);
        history.push("/items"); // <----double check path
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
    <Layout user={props.user}>
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
              placeholder="Enter username"
              onChange={handleChange}
            />
            <label>Password:</label>
            <input
              required
              name="password"
              value={password}
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
            <label>Confirm Password:</label>
            <input
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            {renderError()}
          </form>
          <p>
            Have an account?{" "}
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
