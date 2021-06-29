import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
// import './Layout.css'

const Layout = (props) => {
  const { user } = props
  return (<div className="layout-parent">
    <Nav user={user} />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
  )
}


export default Layout;
