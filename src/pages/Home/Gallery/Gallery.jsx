const Gallery = () => {
    return (
        <div className='my-8'>
            <h3 className='text-3xl font-semibold text-center'>Our Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 m-3">
                <div className="rounded-lg border-2">
                    <img className='w-full h-full rounded-lg' src="https://i.ibb.co/pz6Yg7w/image.png" alt="image" />
                </div>
                <div className="rounded-lg border-2">
                    <img className='w-full h-full rounded-lg' src="https://i.ibb.co/sbdhW7C/image.png" alt="image" />
                </div>
                <div className="rounded-lg border-2">
                    <img className='w-full h-full rounded-lg' src="https://i.ibb.co/2W3SVF4/image.png" alt="image" />
                </div>
                <div className="rounded-lg border-2">
                    <img className='w-full h-full rounded-lg' src="https://i.ibb.co/8Nrvhz7/image.png" alt="image" />
                </div>
                <div className="rounded-lg border-2">
                    <img className='w-full h-full rounded-lg' src="https://i.ibb.co/BCmz73H/image.png" alt="image" />
                </div>
                <div className="rounded-lg border-2">
                    <img className='w-full h-full rounded-lg' src="https://i.ibb.co/rkhrJq4/image.png" alt="image" />
                </div>
                <div className="rounded-lg border-2">
                    <img className='w-full h-full rounded-lg' src="https://i.ibb.co/pxctL71/image.png" alt="image" />
                </div>
                <div className="rounded-lg border-2">
                    <img className='w-full h-full rounded-lg' src="https://i.ibb.co/0qNt3gf/image.png" alt="image" />
                </div>
            </div>
            <div className="grid place-items-center">
                <button className="btn btn-success normal-case font-medium">See All</button>
            </div>
        </div>
    );
};

export default Gallery;