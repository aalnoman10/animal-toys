import { useState, useEffect } from 'react';
import ToyRow from './ToyRow';
import CustomHelmet from '../Helmet/Helmet';

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    return (
        <div className='p-5'>
            <CustomHelmet title='| All-Toys'></CustomHelmet>
            <h3 className="text-4xl text-center pb-4">All Toys</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys.map(toys => <ToyRow
                            key={toys._id}
                            toys={toys}
                        ></ToyRow>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;