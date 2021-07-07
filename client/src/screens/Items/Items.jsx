import { getItems } from "../../services/items";
import { useEffect, useState, useContext } from "react";
import { itemContext, resultContext, inputContext } from "../../Context";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import WatchlistModal from "../../components/Modal/WatchlistModal";
import "./Items.css";


const Items = () => {
  const [items, setItems] = useContext(itemContext)
  const [searchResult, setSearchResult] = useContext(resultContext)
  const [searchInput] = useContext(inputContext)


  const [show, setShow] = useState(false);
  const [watchlist, setWatchlist] = useState([]);

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
    //eslint-disable-next-line
  }, []);

  function checkIcons(item) {
    if (item.category === "freezer") {
      return <i className="far fa-snowflake"></i>;
    } else if (item.category === "dry storage") {
      return <i className="fas fa-box-open"></i>;
    } else {
      return <i className="fas fa-wind"></i>;
    }
  }

  function handleCategory(e) {
    let name = e.target.innerText;
    let itemsCategory = items.filter(
      (item) => item.category === name.toLowerCase()
    );
    setSearchResult(itemsCategory);
  }

  //to close modal
  function closeModal() {
    setShow(false);
  }
  //to generate watchlist based on generic/specified quantity
  function handleWatchlist(e, num) {
    if (num === undefined) {
      num = 10;
    }
    setWatchlist(items.filter((item) => item.quantity <= num));
    setShow(true);
  }

  //show all items on your stock page
  function resetStock() {
    setSearchResult(items);
  }

  return (
    <Layout>
      <div className="itemsbckg">
        <div id="bckg">
          <img src="https://i.imgur.com/71o2pdM.jpg" alt="kitchen" />
        </div>
        <br />
        <br />
        <div className="items-parent">
          <div id="stock-menu-btns">
            <button type="button" onClick={resetStock}>
              Reset
            </button>
            <button type="button" onClick={handleWatchlist}>
              Watchlist
            </button>
            <WatchlistModal
              watchlist={watchlist}
              closeModal={closeModal}
              show={show}
              handleWatchlist={handleWatchlist}
            />
          </div>
          <h2 className="items-your-stock">
            Your Stock
            <hr />
          </h2>
          <h3 className="items-your-stock-category-title">Categories:</h3>
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
            </div>
          </div>
          {searchResult?.map((item, index) => {
            return (
              <div
                className="items-container"
                key={index}
                style={
                  item.shelfLife - item.expiration < 3
                    ? { background: "rgba(255, 0, 0, 0.4)" }
                    : { background: "rgba(243, 253, 255, 0.77)" }
                }
              >
                <Link className="items-link" to={`/items/${item._id}`}>
                  <div className="item-img">
                    <img src={item.imgURL} alt={item.name} />
                    <p
                      className="expired-overlay"
                      style={
                        item.shelfLife - item.expiration <= 0
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      EXPIRED
                    </p>
                  </div>
                  <h2 className="item-name">{item.name}</h2>
                  <hr className="item-name-hr" />
                  <p className="item-quantity item-specifics">
                    <b>Quantity: </b>
                    {item.quantity}
                  </p>
                  <p className="item-price  item-specifics">
                    <b>Price:</b> ${item.price?.toFixed(2)}
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
