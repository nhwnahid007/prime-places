import { useLoaderData } from "react-router-dom";
import EstateCard from "../../components/estateCard/EstateCard";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import Quotes from "../../components/quotes/Quotes";
import { Helmet } from "react-helmet";

const Home = () => {
  const estatesData = useLoaderData();
  return (
    <div data-aos="fade-up"

    data-aos-delay="50"
    data-aos-duration="1000"
    
    data-aos-anchor-placement="top-center">
      <Helmet>
        <title>Prime Places</title>
      </Helmet>
      <p  className="animate__animated animate__backInDown  font-extrabold text-center text-2xl mt-5">Unveiling the Pinnacle of Estate Living</p>
      <BannerSlider></BannerSlider>
      <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
        {estatesData.map((estateData) => (
          <EstateCard key={estateData.id} estateData={estateData}></EstateCard>
        ))}
      </div>
      <Quotes></Quotes>
    </div>
  );
};

export default Home;
