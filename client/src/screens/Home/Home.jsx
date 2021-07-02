import Layout from "../../components/Layout/Layout";
import "./Home.css";
import { Link } from 'react-router-dom'


export default function Home(props) {
  const {
    user,
    items,
    handleSubmit,
    handleChange,
    setSearchResult,
    searchInput,
    setSearchInput,
  } = props;
  return (
    <Layout
      user={user}
      items={items}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setSearchResult={setSearchResult}
      searchInput={searchInput}
      setSearchInput={setSearchInput}
    >
      <div className="home-parent">
        <div className="top">
          <div className="home-about-card">
            <div className="left">
              <p className="home-about-card-body">
                <p className="call-to-action"><Link to="/sign-up" className="sign-up-link">SIGN UP</Link> FOR KITCHINTORY TODAY!</p>
               Throwing Away Food = Throwing Away Profits
                <br />
                <br />
                <strong className="home-about-card-body-end">
                  Never forget what’s in your kitchen..
                </strong>
              </p>
              {/* <img
                clasName="home-kitchintory"
                src="https://i.imgur.com/ClX3n7u.png"
                alt="basket of food"
              /> */}
            </div>
            <div className="right">
              <img
                className="home-about-card-img"
                src="https://i.imgur.com/PnpBTp7.png"
                alt="about card"
              />
            </div>
          </div>
        </div>
        {/* <img className="home-image" src="https://i.imgur.com/DiYwkus.png" /> */}
        <div className="bottom">
          <div className="home-about-container">
            <div className="home-about-text home-about-container-child">
              <h2 className="home-about-text-title">A Taste Of Kitchintory</h2>
              <hr className="home-hr" />
              <ul className="home-ul">
                <li className="home-li">
                  Add items for your kitchen's freezer, refrigerator, and dry
                  storage.
                </li>
                <li className="home-li">
                  Update the price and quantity as your business grows and
                  booms!
                </li>
                <li className="home-li">
                  Edit and Delete items you have as you change your needs.
                </li>
              </ul>
              <hr className="home-hr" />
            </div>
            <div className="home-about-organize home-about-container-child">
              <h2 className="home-about-icons-title">
                Organize what’s in stock by
              </h2>
              <hr className="home-hr home-hr-icons-top" />
              <div className="home-about-icons">
                <img
                  className="home-about-logos-freezer"
                  src="https://i.imgur.com/3TQ43M3.png"
                  alt="freezer logo"
                ></img>
                <img
                  className="home-about-logos-fridge"
                  src="https://i.imgur.com/pBM793j.png"
                  alt="fridge logo"
                ></img>
                <img
                  className="home-about-logos-dry"
                  src="https://i.imgur.com/cLEkiJ3.png"
                  alt="dry logo"
                ></img>
              </div>
              <hr className="home-hr home-hr-icons-bottom" />
            </div>
          </div>
          <div className="home-bottom-image">
            <img
              className="home-bottom-images home-bottom-image-item"
              src="https://i.imgur.com/PtCcirm.png"
            />
            <img
              className="home-bottom-images home-bottom-image-detail"
              src="https://i.imgur.com/9wOK9zR.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

//src="https://i.imgur.com/MUdotoA.png"
