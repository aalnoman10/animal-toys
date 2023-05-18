
const Banner = () => {
    return (
        <div className="hero md:min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/pXpFXfZ/image.png")`, backgroundSize: '100% 100%' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md py-6 md:py-0 md:max-w-4xl">
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold">Welcome to Animal Toys Store</h1>
                    <p className="mb-5">Discover a menagerie of captivating animal toys at our online store. From cuddly plush companions to realistic figurines, we offer a wide range of options to ignite imagination. Explore our collection of safari animals, farm creatures, sea dwellers, and prehistoric beasts. Perfect for educational play or imaginative adventures, find the ideal animal toy to bring joy and endless fun to your little ones. Shop now and unleash the wild!</p>
                    <button className="btn btn-accent normal-case ">Get Started To Bay</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;