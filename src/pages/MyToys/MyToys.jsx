import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyRow from './myToyRow';

const MyToys = () => {

    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (!user?.email) {
            return
        }
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    console.log(myToys);

    return (
        <div className='p-5'>
            <h3 className="text-4xl text-center pb-4">My All Toys</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Image</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map(toys => <MyToyRow
                            key={toys._id}
                            toys={toys}
                        ></MyToyRow>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;