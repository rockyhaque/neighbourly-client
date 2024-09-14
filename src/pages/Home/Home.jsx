import Categories from "../../components/Categories/Categories";
import HeroSection from "../../components/HeroSection/HeroSection";
import Helmet from "react-helmet";
import Workers from "../../components/Workers/Workers";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Neighbourly | Reliable services at your doorstep</title>
      </Helmet>
      
      <HeroSection />
      <div className="my-10">
        <Categories />
      </div>
      {/* <Workers /> */}
      
    </div>
  );
};

export default Home;
