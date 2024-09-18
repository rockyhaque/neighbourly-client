import Categories from "../../components/Categories/Categories";
import HeroSection from "../../components/HeroSection/HeroSection";
import Helmet from "react-helmet";
import Services from "../../components/Services/Services";
import OurSpecialty from "../../components/OurSpecialty/OurSpecialty";
import FAQ from "../../components/FAQ/FAQ";

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

      <Services />

      <OurSpecialty />

      <FAQ />


    </div>
  );
};

export default Home;
