import "./Nav.css";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const authenticatedOptions = (
  <div className="nav-auth-parent">
    <NavLink className="link nav-link-to-items" to="/items">
      Your Stock
    </NavLink>
    <NavLink className="link nav-link-to-items-create" to="/items/create">
      Add Item
    </NavLink>
    <NavLink className="link nav-sign-out-link" to="/sign-out">
      Sign Out
    </NavLink>
  </div>
);

const unauthenticatedOptions = (
  <div className="nav-unauth-parent">
    <div className="nav-sign-up-container">
      <NavLink className="link nav-sign-up-link" to="/sign-up">
        <img
          className="nav-sign-up-logo"
          src="https://i.imgur.com/0reVlNp.png"
        />
        <br />
        Sign Up
      </NavLink>
    </div>
    <div className="nav-sign-in-container">
      <NavLink className="link nav-sign-in-link" to="/sign-in">
        {/* <img
          className="nav-sign-in-logo"
          src="https://i.imgur.com/pvsys8F.png"
        /> */}
        <br />
        Sign In
      </NavLink>
    </div>
  </div>
);
const alwaysOptions = <></>;

export default function Nav(props) {
  const { user, handleSubmit, handleChange } = props;
  return (
    <div className="nav-parent">
      <div className="nav-icon">
        <Link className="nav-link-to-home" to="/">
          <img clasName="kitchintory" src="https://i.imgur.com/ClX3n7u.png" />
        </Link>
      </div>
      <div className="nav-search">
        <Search onSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <div className="nav-links">
        {user && <div className="welcome">Welcome, {user.username}</div>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div>
  );
}
