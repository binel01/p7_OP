import BannerImg from "../assets/banner.jpg";
import Banner from "../components/Banner";
import Card from "../components/Card";
import UseTitle from "../index";

function Home() {
  UseTitle("Home");
  return (
    <div className="home">
      <Banner
        BannerImg={BannerImg}
        textBanner="Chez vous, partout et ailleurs"
      />

      <Card />
    </div>
  );
}

export default Home;
