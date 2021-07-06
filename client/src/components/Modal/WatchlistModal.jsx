import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Modal.css";

export default function WatchlistModal(props) {
  const { watchlist, closeModal, show, handleWatchlist } = props;

  const [input, setInput] = useState(0);
  //set input and create handle change for watchlist
  const handleChangeWL = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const submitWatchlist = (e) => {
    e.preventDefault();
    handleWatchlist(e, input.specifiedqty);
  };
  //resource: https://www.npmjs.com/package/react-modal
  return (
    <Modal
      isOpen={show}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
      id="watchlist-modal"
      className="watchlist-modalClass"
    >
      <div id="watchlist-header">
        <h2 id="watchlist-modal-title">Watchlist</h2>
        <span onClick={closeModal} id="close-modal">
          X
        </span>
      </div>
      <div className="watchlist-specification">
        <p>
          Please specify the quantity limit of the items you want to keep an eye
          on. The default quantity shown below is 10.
        </p>
        <form
          onSubmit={submitWatchlist}
          onChange={handleChangeWL}
          id="watchlist-form"
        >
          <input
            type="number"
            step="0.01"
            name="specifiedqty"
            placeholder="Quantity"
          />
          <button type="submit" id="watchlist-btn">
            Submit
          </button>
        </form>
      </div>
      <br />
      <hr /> <br />
      <ul id="watchlist-list-items">
        {watchlist.map((item, index) => {
          return (
            <li key={index} className="watchlist-item">
              <Link to={`items/${item._id}`} className="watchlist-item-link">
                <b>{item.name}</b>
              </Link>
              <ul className="watchlist-qty">
                <li>
                  <i>Quantity:</i> {item.quantity}
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
}
