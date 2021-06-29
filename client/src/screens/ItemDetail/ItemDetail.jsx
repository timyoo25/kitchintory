import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/items.js";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";

export default function ItemDetail(props) {
  const [item, setItem] = useState({});
  const { user, handleSubmit, handleChange } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id);
      setItem(item);
    };
    fetchItem();
  }, [id]);

  return (
    <Layout user={user} handleSubmit={handleSubmit} handleChange={handleChange} >
      <div className="item-detail-parent">
        <div className="item-detail-container">
          <img className="item-detail-img" src={item.imgURL} alt="" />
          <div className="item-detail-name">{item.name}</div>
          <div className="item-detail-quantity">Quantity: {item.quantity}</div>
          <div className="item-detail-price">Price: ${item.price}</div>
        </div>
        <Link className="item-detail-to-edit" to={`${item._id}/edit`}>
          Edit
        </Link>
      </div>
    </Layout>
  );
}
