const TabPanels = ({ animal }) => {
    const { img, name, price, rating } = animal
    return (
        <div className="hero bg-red-200 rounded-md md:my-5">
            <div className="hero-content md:w-full items-start flex-col md:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="flex justify-between md:flex-col items-end md:items-start md:h-[275px] w-full">
                    <div>
                        <h4 className="font-bold text-2xl my-3">{name}</h4>
                        <h4 className="font-semibold mb-1 text-xl"><span className="font-bold">price : </span>$ {price}</h4>
                        <h4 className="font-semibold text-xl"><span className="font-bold">rating : </span>{rating}</h4>
                    </div>
                    <button className="btn btn-accent normal-case font-bold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TabPanels;