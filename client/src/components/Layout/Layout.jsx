import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Layout.css";

const Layout = (props) => {

  return (
    <div className="layout-parent">
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
