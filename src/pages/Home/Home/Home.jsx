import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Tub from "../Tub/Tub";
import CustomHelmet from "../../Helmet/Helmet";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
// import Aos from "aos";
// import "aos/dist/aos.css";

// useEffect(() => {
//     Aos.init({ duration: 4000 })
// }, [])

const Home = () => {
    return (
        <div className="container">
            <CustomHelmet title='| Home'></CustomHelmet>
            <Banner data-aos="fade-up" />
            <Gallery data-aos="fade-up" />
            <Tub data-aos="fade-up" />
            <TrendingProducts data-aos="fade-up" />
        </div>
    );
};

export default Home;