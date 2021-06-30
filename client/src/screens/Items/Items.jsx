import { getItems } from "../../services/items";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Items.css";

const Items = (props) => {

const { user, 
      items, 
      handleSubmit, 
      handleChange, 
      setItems, 
      setSearchResult, 
      searchResult, 
      searchInput, 
      setSearchInput } = props;


  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
      if (searchInput) {
        setSearchResult(searchResult)
      } else {
        setSearchResult(allItems);
      }
    };
    fetchItems();
  }, []);

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
