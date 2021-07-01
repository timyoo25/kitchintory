import "./Nav.css";
import { NavLink } from "react-router-dom";

import Search from "../Search/Search";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const {
    user,
    items,
    handleSubmit,
    handleChange,
    setSearchResult,
    searchInput,
    setSearchInput,
  } = props;

  const clearSearchNull = () => {
    setSearchResult(null);
    setSearchInput("");
  };
  const clearSearchAll = () => {
    setSearchResult(items);
    setSearchInput("");
  };

  const authenticatedOptions = (
    <div className="nav-auth-parent">
      <NavLink
        className="nav-auth-link nav-link-to-items"
        to="/items"
        onClick={clearSearchAll}
      >
        <p className="nav-auth-stock-link">Your Stock</p>
      </NavLink>
      <NavLink
        className="nav-auth-link nav-link-to-items-create"
        to="/create"
        onClick={clearSearchNull}
      >
        <img
          className="nav-auth-icon nav-add-item-logo"
          src="https://i.imgur.com/ag15z7l.png"
        />
      </NavLink>
      <NavLink className="nav-auth-link nav-sign-out-link" to="/sign-out">
        <img
          className="nav-auth-icon nav-sign-out-logo"
          src="https://i.imgur.com/8ZYKbn8.png"
        />
      </NavLink>
    </div>
  );

  const unauthenticatedOptions = (
    <div className="nav-unauth-parent">
      {/* <div className="nav-sign-up-container">
        <NavLink className="link nav-sign-up-link" to="/sign-up">
        </NavLink>
      </div> */}
      <div className="nav-sign-in-container">
        <NavLink className="nav-unauth-link nav-sign-in-link" to="/sign-in">
          <br />
          <img
            className="nav-sign-in-logo"
            src="https://i.imgur.com/0reVlNp.png"
          />
        </NavLink>
      </div>
    </div>
  );
  const alwaysOptions = <></>;

  return (
    <div className="nav-parent">
      <div className="nav-icon">
        <Link className="nav-link-to-home" to="/">
          <img
            clasName="kitchintory"
            src="https://i.imgur.com/ClX3n7u.png"
            alt="Kitchin-tory"
          />
        </Link>
      </div>
      <div className="nav-search">
        <Search handleSubmit={handleSubmit} handleChange={handleChange} searchInput={searchInput}/>
      </div>
      <div className="nav-links">
        {user && <div className="welcome">Welcome, {user.username}!</div>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div>
  );
}
