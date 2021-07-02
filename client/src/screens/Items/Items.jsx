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
    console.log();
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
          <h2 className="items-your-stock">
            Your Stock
            <hr />
          </h2>
          <h4>Categories:</h4>
          <div className="categories-selection">
            <div className="categories-icons" onClick={handleCategory}>
              <i className="far fa-snowflake">
                <h5 className="categories-text">Freezer</h5>
              </i>
              <div className="categories-title"></div>
            </div>
            <div className="categories-icons" onClick={handleCategory}>
              <i className="fas fa-wind">
                <h5 className="categories-text">Refrigerator </h5>
              </i>
              <div className="categories-title"></div>
            </div>
            <div className="categories-icons" onClick={handleCategory}>
              <i className="fas fa-box-open">
                <h5 className="categories-text">Dry Storage</h5>
              </i>
              {/* <i className="fab fa-dropbox" onClick={handleCategory}></i> */}
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
                  <h2 className="item-name">{item.name}</h2>
                  <hr className="item-name-hr" />
                  <p className="item-quantity item-specifics">
                    <b>Quantity: </b>
                    {item.quantity}
                  </p>
                  <p className="item-price  item-specifics">
                    <b>Price:</b> ${item.price}
                  </p>
                  <p className="item-category  item-specifics">
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
