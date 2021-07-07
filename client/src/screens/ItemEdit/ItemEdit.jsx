import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getItem, updateItem, deleteItem } from "../../services/items";
import "./ItemEdit.css";

export default function ItemEdit() {
  const [item, setItem] = useState({
    name: "",
    quantity: "",
    imgURL: "",
    category: "",
    price: "",
  });
  const [isUpdated, setUpdated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const itemres = await getItem(id);
      setItem(itemres);
    };
    fetchItems();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    switch (item.category) {
      case "freezer":
        item.shelfLife = 15;
        break;
      case "refrigerator":
        item.shelfLife = 2;
        break;
      case "dry storage":
        item.shelfLife = 30;
        break;
      default:
        item.shelfLife = 7;
    }
    const updated = await updateItem(id, item);
    console.log(updated);
    setUpdated({ updated });
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const deletedItem = await deleteItem(id);
    setDeleted(deletedItem);
  };

  if (isUpdated) {
    return <Redirect to={`/items/${id}`} />;
  } else if (deleted) {
    return <Redirect to={`/items`} />;
  }

  return (
    <Layout>
      <div className="item-edit-parent">
        <div className="item-edit-left-side">
          <div className="item-edit-form-title-div">
            <h2 className="item-edit-form-title">Edit Item</h2>
            <hr className="item-edit-hr item-edit-form-title-hr" />
          </div>
          <div className="item-edit-all-forms">
            <div className="item-edit-all-forms-container">
              <form className="item-edit-form" onSubmit={handleSubmit}>
                <div className="item-edit-all-forms-in-container">
                  <div className="in-form-div item-edit-img-div">
                    <h3 className="in-form-label">Image URL:</h3>
                    <input
                      className="item-edit-input item-edit-input-img"
                      placeholder="Image Link"
                      value={item.imgURL}
                      name="imgURL"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="in-form-div item-edit-name-div">
                    <h3 className="in-form-label">Name:</h3>
                    <input
                      className="item-edit-input item-edit-input-name"
                      placeholder="Name"
                      value={item.name}
                      name="name"
                      required
                      autoFocus
                      onChange={handleChange}
                    />
                  </div>
                  <div className="in-form-div item-edit--div">
                    <h3 className="in-form-label">Quantity:</h3>
                    <input
                      type="number"
                      className="item-edit-input item-edit-input-quantity"
                      placeholder="Quantity"
                      value={item.quantity}
                      name="quantity"
                      min="0"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="in-form-div item-edit--div">
                    <h3 className="in-form-label">Price:</h3>
                    <input
                      type="number"
                      className="item-edit-input item-edit-input-price-price"
                      placeholder="Price"
                      value={item.price}
                      name="price"
                      step="0.01"
                      min="0"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="in-form-div item-edit--div">
                    <h3 className="in-form-label">Category:</h3>
                    <select
                      name="category"
                      className="item-edit-input category"
                      onChange={handleChange}
                    >
                      <option
                        value="freezer"
                        selected={item.category === "freezer"}
                      >
                        Freezer
                      </option>
                      <option
                        value="refrigerator"
                        selected={item.category === "refrigerator"}
                      >
                        Refrigerator
                      </option>
                      <option
                        value="dry storage"
                        selected={item.category === "dry storage"}
                      >
                        Dry Storage
                      </option>
                    </select>
                  </div>
                </div>
                <hr className="item-edit-hr item-edit-form-button-hr" />
                <div className="item-edit-buttons">
                  <button
                    className="item-edit-button item-edit-save"
                    type="submit"
                  >
                    Save
                  </button>
                  <br />
                  <hr className="item-edit-hr item-edit-small" />
                  <button
                    className="item-edit-button item-edit-delete"
                    type="button"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="item-edit-right-side"></div>
      </div>
    </Layout>
  );
}
