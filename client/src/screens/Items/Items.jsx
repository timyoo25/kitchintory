import { getItems } from "../../services/items";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Items.css";

const Items = (props) => {
  const [items, setItems] = useState([]);
  const { user } = props;
  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
    };
    fetchItems();
  }, []);

  return (
    <Layout user={user}>
      <div className="items-parent">
        {items &&
          items.map((item, index) => {
            return (
              <Link className="items-link" to={`/items/${item._id}`}>
                <div className="items-container" key={index}>
                  <img className="item-img" src={item.imgURL} />
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-quantity">Quantity: {item.quantity}</p>
                  <p className="item-price">Price: ${item.price}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </Layout>
  );
};

export default Items;
