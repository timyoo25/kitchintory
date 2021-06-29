import "./Nav.css";
import { NavLink } from 'react-router-dom'
const authenticatedOptions = (
  <>
    <NavLink className="link" to="/items">Your Stock</NavLink>
    <NavLink className="link" to="/create">Add Item</NavLink>
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
  </>
)

export default function Nav({ user }) {
  return (
    <div className="nav-parent">
      <div className="links">
        {console.log(user)}
        {user && <div className="link welcome">Welcome, {user.username}</div>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div>
  )
}
