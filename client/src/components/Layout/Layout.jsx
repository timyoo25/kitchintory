import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Search from "../Search/Search"


const Layout = (props) => {
  const { user, items, handleSubmit, handleChange, setSearchResult, setSearchInput } = props
  return (<div className="layout-parent">
    <Nav user={user} items={items} handleSubmit={handleSubmit} handleChange={handleChange}
      setSearchResult={setSearchResult} setSearchInput={setSearchInput} />
    {/* <Search handleSubmit={handleSubmit} handleChange={handleChange} /> */}
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
  )
}


export default Layout;
