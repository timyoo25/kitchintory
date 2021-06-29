import Layout from "../../components/Layout/Layout";
import "./Home.css";

export default function Home() {
  return (
    <Layout>
      <div className="home-parent">
        <div className="top">
          <img className="home-image" src="https://i.imgur.com/MUdotoA.png" />
        </div>
        <div className="bottom">
          <div>
            <div className="home-taste">A taste</div>
            <div className="home-location-logo"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
