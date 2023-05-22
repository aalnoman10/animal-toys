const TrendingProduct = ({ pd }) => {
    const { price, toyName, photo, subCategory } = pd

    return (
        <div className='bg-white rounded-lg hover:shadow-md'>
            <div className='p-8'>
                <img src={photo} className='rounded-lg h-[250px] md:h-[200px] w-full' alt="photo" />
            </div>
            <hr />
            <div className='p-4 flex justify-between items-end'>
                <div>
                    <p className="text-slate-500">{subCategory}</p>
                    <h4 className="text-xl text-blue-500 py-2">{toyName}</h4>
                    <h6 className="text-3xl">$ {price}</h6>
                </div>
                <div>
                    <button className="btn btn-primary">Bay</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingProduct;