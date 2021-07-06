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
    if (form.isError) {
      return (
        <p className="invalid-msg">{form.errorMsg}</p>
      )
    } else {
      <p></p>
    }
  }
    
  const { username, password } = form;
  return (
    <Layout>
      <div className="form-container-parent">
        <div className="form-container">
          <div className="title">
            <h3>Sign In Here</h3>
            <hr className="sign-in-line" />
          </div>
          <br />
          <form className="form" onSubmit={onSignIn} id="sign-in-form">
            <div className="username-container">
              <div className="sign-in-label">
                <label>Username:</label>
              </div>
              <div className='sign-in-username'>
                <input
                  required
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  />
              </div>
            </div>
            <br />
            <div className="password-container">
              <div className="sign-in-label">
                <label>Password:</label>
              </div>
              <div className='sign-in-password'>
                <input
                  required
                  name="password"
                  value={password}
                  type="password"
                  onChange={handleChange}
                  />
              </div>
            </div>
            <br />
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
            {renderError()}
          </form>
          <br />
          <div className="link">
            <p className="sign-in-prompt">
              Don't have an Account?
              <Link to="/sign-up">
                <i>Sign Up Here!</i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
