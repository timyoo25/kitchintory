import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getItem, updateItem, deleteItem } from "../../services/items";
export default function ItemEdit(props) {

  const [item, setItem] = useState({
    name: "",
    quantity: "",
    imgURL: "",
    category: "",
    price: "",
  });
  const [isUpdated, setUpdated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [input, setInput] = useState(item)
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
    const updated = await updateItem(id, item);
    console.log(updated)
    setUpdated({ updated });
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const deletedItem = await deleteItem(id);
    setDeleted(deletedItem);
  };

  if (isUpdated) {
    return <Redirect to={`/items/${id}`} />;

  }
  else if (deleted) {
    return <Redirect to={`/items`} />;
  }

  return (
    <Layout user={props.user} items={props.items} handleSubmit={props.handleSubmit} handleChange={props.handleChange}
      setSearchResult={props.setSearchResult} setSearchInput={props.setSearchInput}
    >
      <div className="edit-container">
        <div className="image-container">
          <img className="edit-item-image" src={item.imgURL} alt={item.name} />

          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={item.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Name"
            value={item.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-qty"
            placeholder="Quantity"
            value={item.quantity}
            name="quantity"
            required
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={item.price}
            name="price"
            required
            onChange={handleChange}
          />
          <input
            className="input-category"
            placeholder="Category"
            value={item.category}
            name="category"
            required
            onChange={handleChange}
          />

          <button type="submit" className="save-btn">
            Save
          </button>
          <button type="button" className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </form>
      </div>
    </Layout>
  );
}
