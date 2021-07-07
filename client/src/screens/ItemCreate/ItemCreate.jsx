import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createItem } from "../../services/items";
import { Redirect } from "react-router-dom";
import "./ItemCreatev2.css";

export default function ItemCreate() {
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
    if (!item.imgURL)
      item.imgURL =
        "https://res.cloudinary.com/willnolin/image/upload/v1625236095/color_basket_utvt7n.png";
    switch (item.category) {
      case "freezer":
        item.shelfLife = 15;
        break;
      case "refrigerator":
        item.shelfLife = 7;
        break;
      case "dry storage":
        item.shelfLife = 30;
        break;
      default:
        item.shelfLife = 7;
    }
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
    <Layout>
      <div className="create-item-master">
        <div className="create-item-image">
        </div>
        <div className="create-item-parent">
          <img
            src="https://i.imgur.com/qqDf7bL.png"
            alt="add kitchen logo"
            id="addlogo"
          />
          <div className="add-item-title">
            <h1 className="add-item-title-text">Add Item</h1>
          </div>
          <hr className="add-item-line" />
          <div className="create-item-form-parent">
            <form className="create-item-form" onSubmit={handleSubmit}>
              <div className="create-item-container">
                <div className="create-item-titles" id="create-name">
                  <h2 className="create-item-titles-text">Name</h2>
                  <input
                    className="input-name create-input"
                    value={item.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="create-item-titles">
                  <h2 className="create-item-titles-text">Quantity</h2>
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
                  <h2 className="create-item-titles-text">Price</h2>
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
                  <h2 className="create-item-titles-text">Category</h2>
                  <select
                    name="category"
                    className="input-category create-input"
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="freezer">Freezer</option>
                    <option value="refrigerator">Refrigerator</option>
                    <option value="dry storage">Dry Storage</option>
                  </select>
                </div>
                <div className="create-item-titles" id="create-imgURL">
                  <h2 className="create-item-titles-text">Image URL</h2>
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
