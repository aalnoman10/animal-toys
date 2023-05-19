import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Tub from "../Tub/Tub";

const Home = () => {
    return (
        <div className="container">
            <Banner />
            <Gallery />
            <Tub />
        </div>
    );
};

export default Home;