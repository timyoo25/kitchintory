import "./Nav.css";
import { NavLink } from 'react-router-dom'
const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">Add Product</NavLink>
    <NavLink className="link" to="/sign-out">Sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">Sign Up</NavLink>
    <NavLink className="link" to="/sign-in">Sign In</NavLink>
  </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/products">Products</NavLink>
  </>
)

export default function Nav({ user }) {
  return (
    <div className="nav-parent">
      <div className="links">
        {user && <div className="link welcome">Welcome, {user.username}</div>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div>
  )
}
