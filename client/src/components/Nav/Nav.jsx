import "./Nav.css";
import { NavLink } from "react-router-dom";
import Search from '../Search/Search'

export default function Nav(props) {
  const { user, items, handleSubmit, handleChange, setSearchResult, setSearchInput } = props;

  const clearSearchNull = () => {
    setSearchResult(null)
    setSearchInput("")
  }
  const clearSearchAll = () => {
    setSearchResult(items)
    setSearchInput("")
  }

  const authenticatedOptions = (
    <div className="nav-auth-parent">
      <NavLink className="link nav-link-to-items" to="/items" onClick={clearSearchAll}>
        Your Stock
      </NavLink>
      <NavLink className="link nav-link-to-items-create" to="/create" onClick={clearSearchNull}>
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

  return (
    <div className="nav-parent">
      <div className="nav-icon">
        <img clasName="kitchintory" src="https://i.imgur.com/ClX3n7u.png" />
      </div>
      <div className="nav-search">
        <Search handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <div className="nav-links">
        {user && <div className="welcome">Welcome, {user.username}</div>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div>
  );
}
