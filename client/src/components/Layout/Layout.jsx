import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Search from "../Search/Search"


const Layout = (props) => {
  const { user, handleSubmit, handleChange } = props
  return (<div className="layout-parent">
    <Nav user={user} onSubmit={handleSubmit} handleChange={handleChange} />
    {/* <Search onSubmit={handleSubmit} handleChange={handleChange} /> */}
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
  )
}


export default Layout;
