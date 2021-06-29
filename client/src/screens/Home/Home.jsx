import Layout from "../../components/Layout/Layout";
import "./Home.css";

export default function Home(props) {
  const { user, handleSubmit, handleChange } = props;
  return (
    <Layout user={user} handleSubmit={handleSubmit} handleChange={handleChange} >
      <div className="home-parent">
        <div className="top">
          <img className="home-image" src="https://i.imgur.com/MUdotoA.png" />
        </div>
        <div className="bottom">
          <div className="home-about-container">
            <div className="home-about-text">A taste</div>
            <div className="home-about-logos">Logo</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
