import Layout from "../../components/Layout/Layout";
import "./Home.css";

export default function Home(props) {
  const { user, handleSubmit, handleChange } = props;
  return (
    <Layout user={user} handleSubmit={handleSubmit} handleChange={handleChange}>
      <div className="home-parent">
        <div className="top">
          <img className="home-image" src="https://i.imgur.com/MUdotoA.png" />
        </div>
        <div className="bottom">
          <div className="home-about-container">
            <div className="home-about-text">
              <h2 className="home-about-text-title">A Taste Of Kitchintory</h2>
              <hr className="home-hr" />
              <ul className="home-ul">
                <li className="home-li">
                  Add what’s in you kitchens’ freezer, refrigerator, and dry
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
            <div className="home-about-organize">
              <h2 className="home-about-icons-title">
                Organize what’s in stock by
              </h2>
              <hr className="home-hr home-hr-icons-top" />
              <div className="home-about-icons">
                <img
                  className="home-about-logos-freezer"
                  src="https://i.imgur.com/3TQ43M3.png"
                ></img>
                <img
                  className="home-about-logos-fridge"
                  src="https://i.imgur.com/pBM793j.png"
                ></img>
                <img
                  className="home-about-logos-dry"
                  src="https://i.imgur.com/cLEkiJ3.png"
                ></img>
              </div>
              <hr className="home-hr home-hr-icons-bottom" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
