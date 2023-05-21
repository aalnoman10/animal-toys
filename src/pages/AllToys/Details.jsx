const Details = ({ toys }) => {

    const { _id, price, name, photo, toyName, description, email, rating, subCategory, quantity } = toys
    console.log(toys);

    return (
        <div>
            <h3 className="font-bold text-lg text-center pb-2">{toyName} - Details</h3>
            <div className="grid md:grid-cols-2">
                <div className="grid place-items-center pb-2 md:pb-0 md:gap-2">
                    <img src={photo} alt="" />
                </div>
                <div className="custom-detail-items">
                    <p className="flex justify-between pb-1 border-b"><strong>Seller : </strong> <span className="w-8/12 md:w-9/12">{name}</span></p>
                    <p className="flex justify-between pb-1 border-b"><strong>Seller Email: </strong> <span className="w-8/12 md:w-9/12">{email}</span></p>
                    <p className="flex justify-between pb-1 border-b"><strong>subCategory : </strong> <span className="w-8/12 md:w-9/12">{subCategory}</span></p>
                    <p className="flex justify-between pb-1 border-b"><strong>quantity : </strong> <span className="w-8/12 md:w-9/12">{quantity}</span></p>
                    <p className="flex justify-between pb-1 border-b"><strong>rating: </strong> <span className="w-8/12 md:w-9/12">{rating}</span></p>
                    <p className="flex justify-between pb-2 border-b"><strong>price : </strong> <span className="w-8/12 md:w-9/12">{price}</span></p>
                    <div>
                        <p className="pb-1 font-semibold">Description : </p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;