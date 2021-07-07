import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import Search from "../Search/Search";
import { verifyUser } from "../../services/users";
import { Link } from "react-router-dom";

export default function Nav() {
  const { user, setUser, items, setSearchResult, setSearchInput } =
    useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
    // eslint-disable-next-line
  }, []);

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
      <div className="nav-auth-links-parent">
        <div className="nav-auth-stock-link-container">
          <NavLink
            className="nav-auth-link nav-link-to-items"
            to="/items"
            onClick={clearSearchAll}
          >
            <p className="nav-auth-stock-link">Your Stock</p>
          </NavLink>
        </div>
        <hr className="nav-auth-hr" />
        <div className="nav-auth-add-link-container">
          <NavLink
            className="nav-auth-link nav-link-to-items-create"
            to="/create"
            onClick={clearSearchNull}
          >
            <p className="nav-auth-add-link">Add item</p>
          </NavLink>
        </div>
      </div>
      <NavLink className="nav-auth-link nav-sign-out-link" to="/sign-out">
        <p className="nav-sign-out-link-caption">Sign Out</p>
      </NavLink>
    </div>
  );

  const unauthenticatedOptions = (
    <div className="nav-unauth-parent">
      <div className="nav-sign-in-container">
        <NavLink className="nav-unauth-link nav-sign-in-link" to="/sign-up">
          <div className="nav-sign-up-container">
            <br />
          </div>
          <div className="nav-sign-up-text">Sign Up / Sign In</div>
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
            className="kitchintory"
            src="https://i.imgur.com/ClX3n7u.png"
            alt="Kitchin-tory logo"
          />
        </Link>
      </div>
      <div className="nav-search">
        <div className="nav-user-prompt-or-welcome">
          {user && <div className="welcome">Welcome, {user.username}!</div>}
        </div>
        <div className="nav-search-bar-parent">
          <div className="nav-search-bar">
            {user ? <Search className="search" /> : "Welcome to Kitchin-tory!"}
          </div>
        </div>
        <div className="nav-empty-div"></div>
      </div>
      <div className="nav-links">
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div>
  );
}
