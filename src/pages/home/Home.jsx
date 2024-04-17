import { useLoaderData } from "react-router-dom";
import EstateCard from "../../components/estateCard/EstateCard";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import Quotes from "../../components/quotes/Quotes";


const Home = () => {
    const estatesData = useLoaderData();
    return (
        <div>
            <BannerSlider></BannerSlider>
            <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
                {
                    estatesData.map(estateData => <EstateCard key={estateData.id} estateData={estateData}></EstateCard>)
                }
            </div>
            <Quotes></Quotes>
        </div>
    );
};

export default Home;