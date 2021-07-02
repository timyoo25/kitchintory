import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/items.js";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import "./ItemDetail.css";

export default function ItemDetail(props) {
  const [item, setItem] = useState({});
  const {
    user,
    items,
    handleSubmit,
    handleChange,
    setSearchResult,
    searchInput,
    setSearchInput,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id);
      setItem(item);
    };
    fetchItem();
  }, [id]);

  function checkIcons(item) {
    if (item.category === "freezer") {
      return <i class="far fa-snowflake"></i>;
    } else if (item.category === "dry storage") {
      return <i class="fas fa-box-open"></i>;
    } else {
      return <i class="fas fa-wind"></i>;
    }
  }

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
      <div className="item-detail-parent">
        <div className="item-detail-container">
          <div className="item-detail-img-column">
            <img className="item-detail-img" src={item.imgURL} alt="" />
          </div>
          <div className="item-detail-column">
            <div className="item-detail-name">
              {item.name}
              <hr className="line" />
            </div>

            <div className="item-detail-details">
              <div className="item-detail-quantity">
                Quantity: {item.quantity}
              </div>
              <div className="item-detail-price">Price: ${item.price?.toFixed(2)}</div>
          <span className="categorydetail-icon">{checkIcons(item)}</span>
              <hr className="line" />
            </div>

            <Link className="item-detail-to-edit" to={`${item._id}/edit`}>
              <button className="item-edit-button">Edit</button>
            </Link>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  );
}
