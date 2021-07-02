import { getItems } from "../../services/items";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Items.css";

const Items = (props) => {
  const {
    user,
    items,
    handleSubmit,
    handleChange,
    setItems,
    setSearchResult,
    searchResult,
    searchInput,
    setSearchInput,
  } = props;

  const [categoryArr, setCategoryArr] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
      if (searchInput) {
        setSearchResult(searchResult);
      } else {
        setSearchResult(allItems);
      }
    };
    fetchItems();
  }, []);

  function checkIcons(item) {
    if (item.category === "freezer") {
      return <i class="far fa-snowflake"></i>;
    } else if (item.category === "dry storage") {
      return <i class="fas fa-box-open"></i>;
    } else {
      return <i class="fas fa-wind"></i>;
    }
  }

  function handleCategory(e) {
    let name = e.target.innerText;
    let itemsCategory = items.filter(
      (item) => item.category === name.toLowerCase()
    );
    setCategoryArr(itemsCategory);
    setSearchResult(itemsCategory);
    console.log(itemsCategory, categoryArr);
  } //onClick={handleCategory}

  return (
    <Layout
      user={user}
      items={items}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setSearchResult={setSearchResult}
      searchInput={searchInput}
      setSearchInput={setSearchInput}
    >
      <div className="itemsbckg">
        <div id="bckg">
          <img src="https://i.imgur.com/71o2pdM.jpg" alt="kitchen" />
        </div>
        <br />
        <br />
        <div className="items-parent">
          <h3>
            Your Stock
            <hr />
          </h3>
          <h4>Categories:</h4>
          <div className="categoriesSelection">
            <div className="categories-icons" onClick={handleCategory}>
              <i className="far fa-snowflake"></i>
              <div className="categories-title">
                <h5>Freezer</h5>
              </div>
            </div>
            <div className="categories-icons" onClick={handleCategory}>
              <i className="fas fa-wind"></i>
              <div className="categories-title">
                <h5>Refrigerator </h5>
              </div>
            </div>
            <div className="categories-icons" onClick={handleCategory}>
              <i className="fas fa-box-open"></i>
              {/* <i className="fab fa-dropbox" onClick={handleCategory}></i> */}
              <div className="categories-title">
                <h5>Dry Storage</h5>
              </div>
            </div>
          </div>
          {/* {searchResult?.map((item, index) => { */}
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
                    <span className="category-icon">{checkIcons(item)}</span>
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Items;
