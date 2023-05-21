import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Details from './Details';

const ToyRow = ({ toys }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const location = useLocation()

    const { _id, price, name, toyName, subCategory, quantity } = toys

    console.log(toys);

    const handleCheckUser = () => {
        if (!user) {
            alert('please login')
        }
        return !user && navigate('/login', { state: { from: location } }, { replace: true })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td><label onClick={handleCheckUser} htmlFor="my-modal-5" className="btn btn-info font-semibold">Details</label></td>
            {user && <>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <Details toys={toys} />
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">Close</label>
                        </div>
                    </div>
                </div></>
            }
        </tr>
    );
};

export default ToyRow;