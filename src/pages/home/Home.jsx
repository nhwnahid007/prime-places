import { useLoaderData } from "react-router-dom";
import EstateCard from "../../components/estateCard/EstateCard";


const Home = () => {
    const estatesData = useLoaderData();
    return (
        <div>
            <p>This is home page: {estatesData.length}</p>
            <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
                {
                    estatesData.map(estateData => <EstateCard key={estateData.id} estateData={estateData}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Home;