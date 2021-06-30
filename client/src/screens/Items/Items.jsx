import { getItems } from "../../services/items";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Items.css";

const Items = (props) => {
  // const [items, setItems] = useState([]);
  // const [searchResult, setSearchResult] = useState([])
  // const history = useHistory();
  const {
    user,
    items,
    handleSubmit,
    handleChange,
    setItems,
    setSearchResult,
    searchResult,
    setSearchInput,
  } = props;
  // const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
      // setSearchResult(allItems);
      if (searchResult) {
        return setSearchResult(searchResult);
      } else {
        return setSearchResult(allItems);
      }
    };
    fetchItems();
  }, []);
  // const results = items.filter((item) =>
  // item.name.toLowerCase().includes(searchInput.toLowerCase())
  // )
  // setSearchResult(results)
  // const handleChange = (event) => {
  //   event.preventDefault()
  //   // console.log(event)
  //   setSearchInput(
  //     // ...searchInput,
  //     event.target.value
  //   )
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   const results = items.filter((item) =>
  //     item.name.toLowerCase().includes(searchInput.toLowerCase())
  //   )
  //   setSearchResult(results)
  //   history.push('/items')
  // }

  return (
    <Layout
      user={user}
      items={items}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setSearchResult={setSearchResult}
      setSearchInput={setSearchInput}
    >
      <div className="items-parent">
        <h3>Your Stock</h3>
        {searchResult?.map((item, index) => {
          return (
            <div className="items-container" key={index}>
              <Link className="items-link" to={`/items/${item._id}`}>
                <div className="item-img">
                  <img src={item.imgURL} alt={item.name} />
                </div>
                <h2 className="item-name">
                  {item.name}
                  <hr />
                </h2>
                <p className="item-quantity">
                  <b>Quantity: </b>
                  {item.quantity}
                </p>
                <p className="item-price">
                  <b>Price:</b> {item.price}
                </p>
                <p className="item-category">
                  <b>Category:</b> {item.category}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Items;
