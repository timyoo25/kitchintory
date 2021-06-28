import { getItems } from "../../services/items";
import { useState, useEffect } from "react";
// import "./Items.css";

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
    <div className="items-parent">
      {items &&
        items.map((item, index) => {
          return (
            <div className="items=container" key={index}>
              <img src={item.imgURL} />
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Items;
