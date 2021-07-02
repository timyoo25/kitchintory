import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Layout = (props) => {
  const {handleSubmit, handleChange} = props
  return (<div className="layout-parent">
    <Nav
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      />
    {/* <Search handleSubmit={handleSubmit} handleChange={handleChange} /> */}
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
  )
}


export default Layout;
