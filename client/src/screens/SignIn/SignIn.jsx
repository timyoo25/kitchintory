import { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./SignIn.css";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.push("/items"); // <---double check later
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };
  const { username, password } = form;
  return (
    <Layout>
      <div className="form-container">
        <div className="title">
          <h3>Sign In Here</h3>
        <hr className='sign-in-line' />
        </div>
        <br />
        <form className="form" onSubmit={onSignIn} id='sign-in-form'>
          <div className="username-container">
            <label>Username</label>
            <br />
            <input
              required
              type="text"
              name="username"
              value={username}
              // placeholder='Enter Username'
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="password-container">
            <label>Password</label>
            <br />
            <input
              required
              name="password"
              value={password}
              type="password"
              // placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <br />
          {renderError()}
        </form>
        <br />
        <div className="link">
          <p className="sign-in-prompt">
            Don't have an Account? <Link to="/sign-up">Sign Up Here</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
