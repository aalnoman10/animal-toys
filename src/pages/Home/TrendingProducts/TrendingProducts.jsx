import { useEffect, useState } from 'react';
import TrendingProduct from './TrendingProduct';

const TrendingProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/toys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products);

    return (
        <div className='bg-slate-200 py-8'>
            <h3 className="text-center text-3xl font-semibold pb-2">Trending Products</h3>
            <hr />
            <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    products.slice(0, 4).map(pd => <TrendingProduct
                        key={pd._id}
                        pd={pd}
                    ></TrendingProduct>)
                }
            </div>
        </div>
    );
};

export default TrendingProducts;