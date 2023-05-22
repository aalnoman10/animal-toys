import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyRow from './myToyRow';
import { ToastError, ToastSuccess } from '../../main';
import { Toaster } from 'react-hot-toast';
import CustomHelmet from '../Helmet/Helmet';

const MyToys = () => {

    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (!user?.email) {
            return
        }
        fetch(`https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    const handleDelete = (id) => {
        const sureConfirm = confirm("Are you sure delete this item");
        if (sureConfirm) {

            fetch(`https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/toys/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        ToastSuccess('Item Delete Successful')
                        const ramming = myToys.filter(toy => toy._id !== id)
                        setMyToys(ramming)
                    }
                    else {
                        ToastError()
                    }
                })
        }
    }

    return (
        <div className='p-5'>
            <Toaster />
            <CustomHelmet title='| My-Toys'></CustomHelmet>
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
                            handleDelete={handleDelete}
                        ></MyToyRow>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;