import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ToastSuccess } from '../../main';
import { Toaster } from 'react-hot-toast';

const ToyRow = ({ toys }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const location = useLocation()

    const { price, name, toyName, subCategory, quantity } = toys

    const handleCheckUser = () => {
        if (!user) {
            ToastSuccess('please login fist time')
            return navigate('/login', { state: { from: location } }, { replace: true })
        }
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td><button onClick={handleCheckUser}><Link to={`/all-toys/details/${toys._id}`} className="btn btn-info font-semibold">Details</Link></button></td>
            <Toaster />
        </tr>
    );
};

export default ToyRow;