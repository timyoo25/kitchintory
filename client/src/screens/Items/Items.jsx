import { getItems } from "../../services/items";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
    };
    fetchItems();
  }, []);

  return (
    <Layout>
      <div className="items-parent">
        {items &&
          items.map((item, index) => {
            return (
              <div className="items-container" key={index}>
                <img className="item-img" src={item.imgURL} />
                <h3 className="item-name">{item.name}</h3>
                <p className="item-quantity">Quantity: {item.quantity}</p>
                <p className="item-price">Price: ${item.price}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default Items;
