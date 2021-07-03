import Layout from "../../components/Layout/Layout";
import "./Home.css";
import { Link } from "react-router-dom";

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
                <p className="call-to-action">
                  <Link to="/sign-up" className="sign-up-link">
                    SIGN UP
                  </Link>
                  FOR KITCHIN-TORY TODAY!
                </p>
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
            <img
              className=" home-dark-blue-image-item"
              src="https://i.imgur.com/Jguggtc.png"
            />
            <div className="home-about-organize home-about-container-child">
              <h2 className="home-about-icons-title">
                Organize what’s in stock by:
              </h2>
              <hr className="home-hr home-hr-icons" />
              <div className="home-about-icons">
                <i className="far fa-snowflake home-snowflake home-organize-icons">
                  <h5 className="categories-text">Freezer</h5>
                </i>
                <i className="fas fa-wind home-fridge home-organize-icons">
                  <h5 className="categories-text">Refrigerator </h5>
                </i>
                <i className="fas fa-box-open home-dry home-organize-icons">
                  <h5 className="categories-text">Dry Storage</h5>
                </i>
              </div>
            </div>
          </div>
          <div className="home-bottom-image">
            <div className="home-about-text home-about-container-child">
              <h2 className="home-about-text-title">A Taste Of Kitchin-tory</h2>
              <hr className="home-hr-last" />
              <div className="home-about-below-hr">
                <div className="home-about-sign-up-bottom">
                  <div className="home-about-sign-up-bottom-effect">
                    <Link
                      className="nav-unauth-link nav-sign-in-link"
                      to="/sign-up"
                    >
                      <img
                        className="home-add-example home-add-sign-example"
                        src="https://i.imgur.com/0reVlNp.png"
                      />
                    </Link>
                    <div className="home-about-sign-up-text">
                      <p className="home-about-sign-up-p">Sign Up Here!</p>
                    </div>
                  </div>
                </div>

                <div className="home-about-vl"></div>

                <div className="home-about-functionality">
                  <p className="home-about-functionality-call-to-action">
                    <strong>After signing up, you can :</strong>
                  </p>
                  <div className="home-about-sign-up-to-view-stock">
                    {/* <img
                      className="home-add-example home-add-item-example"
                      src="https://i.imgur.com/ag15z7l.png"
                    /> */}
                    <div className="home-about-add-item-text-top">
                      <li className="home-about-add-item-text-li">
                        View Stock
                      </li>
                    </div>
                  </div>
                  <div className="home-about-sign-up-to-add-to-stock">
                    {/* <img
                      className="home-add-example home-add-item-example"
                      src="https://i.imgur.com/7V3tEEJ.png"
                    /> */}
                    <div className="home-about-add-item-text-middle">
                      <li className="home-about-add-item-text-li">
                        Add to Stock
                      </li>
                    </div>
                  </div>
                  <div className="home-about-sign-up-to-edit-stock">
                    {/* <img
                      className="home-add-example home-add-item-example"
                      src="https://i.imgur.com/C7i0rBu.png"
                    /> */}
                    <div className=" home-about-add-item-text-bottom">
                      <li className="home-about-add-item-text-li">
                        Edit Stock
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="home-bottom-images home-bottom-image-detail"
              src="https://i.imgur.com/0A5m41r.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

//src="https://i.imgur.com/MUdotoA.png"
