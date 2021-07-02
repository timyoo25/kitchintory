import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createItem } from "../../services/items";
import { Redirect } from "react-router-dom";
import "./ItemCreate.css";

export default function ItemCreate(props) {
  const [item, setItem] = useState({
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    imgURL: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!item.imgURL) item.imgURL = 'https://res.cloudinary.com/willnolin/image/upload/v1625236095/color_basket_utvt7n.png'
    const created = await createItem(item);
    setCreated({ created });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  if (isCreated) {
    return <Redirect to={`/items`} />;
  }

  return (
    <Layout
      user={props.user}
      items={props.items}
      handleSubmit={props.handleSubmit}
      handleChange={props.handleChange}
      setSearchResult={props.setSearchResult}
      searchInput={props.searchInput}
      setSearchInput={props.setSearchInput}
    >
      <div className="create-item-master">
        <div className="create-item-image">
          {/* <img
            className="add-item-img"
            src="https://i.imgur.com/Fpi2uSF.png"
            alt="add item"
          /> */}
        </div>
        <div className="create-item-parent">
          <div className="add-item-title">
            <h1>Add Item</h1>
          </div>
          <img
            src="https://i.imgur.com/qqDf7bL.png"
            alt="add kitchen logo"
            id="addlogo"
          />
          <hr className="add-item-line" />
          <div>
            <form className="create-item-form" onSubmit={handleSubmit}>
              <div className="create-item-container">
                <div className="create-item-titles" id="create-name">
                  <h2>Name</h2>
                  <input
                    className="input-name create-input"
                    value={item.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="create-item-titles">
                  <h2>Quantity</h2>
                  <input
                    type="number"
                    className="input-quantity create-input"
                    value={item.quantity}
                    name="quantity"
                    min="0"
                    onChange={handleChange}
                  />
                </div>
                <div className="create-item-titles">
                  <h2>Price</h2>
                  <input
                    type="number"
                    className="input-price create-input"
                    value={item.price}
                    name="price"
                    step="0.01"
                    min="0"
                    onChange={handleChange}
                  />
                </div>
                <div className="create-item-titles">
                  <h2>Category</h2>
                  <select
                    name="category"
                    className="input-category"
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="freezer">Freezer</option>
                    <option value="refrigerator">Refrigerator</option>
                    <option value="dry storage">Dry Storage</option>
                  </select>
                </div>
                <div className="create-item-titles" id="create-imgURL">
                  <h2>Image URL</h2>
                  <input
                    className="input-imgURL create-input"
                    value={item.imgURL}
                    name="imgURL"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <hr className="create-form-line" />
              <button type="submit" className="create-submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
