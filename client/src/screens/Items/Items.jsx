import { getItems } from "../../services/items";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Items.css";

const Items = (props) => {
  const [items, setItems] = useState([]);
  const [searchResult, setSearchResult] = useState([])
  const history = useHistory();
  const { user } = props;
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems();
      setItems(allItems);
      setSearchResult(allItems);
    };
    fetchItems();
  }, []);

  const handleChange = (event) => {
    event.preventDefault()
    // console.log(event)
    setSearchInput(
      // ...searchInput,
      event.target.value
    )
  }
  // const results = items.filter((item) =>
  //   item.name.toLowerCase().includes(event.target.value.toLowerCase())
  // )
  // setSearchResult(results)
  // history.push('/items')

  // const handleSearch = (event) => {
  //   const results = items.filter((item) =>
  //     item.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   )
  //   setSearchResult(results)
  //   // setApplySort(true)
  // }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    setSearchResult(results)
    history.push('/items')
  }

  return (
    <Layout user={user} handleSubmit={handleSubmit} handleChange={handleChange} >
      <div className="items-parent">
        {searchResult.map((item, index) => {
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
