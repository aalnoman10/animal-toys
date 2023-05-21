import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const MyToyRow = ({ toys, handleDelete }) => {
    const { _id, price, name, toyName, photo, subCategory, quantity } = toys

    return (
        <tr>
            <td>{name}</td>
            <td><img className="max-h-[125px] max-w-[125px] rounded-lg" src={photo} alt={toyName} /></td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className="bg-slate-400 p-2 rounded-full text-white"><AiOutlineDelete size={20} /></button>
            </td>
            <td>
                <Link to={`/my-toys/update/${_id}`}><button className="bg-slate-400 p-2 rounded-full text-white"><BiEdit size={20} /></button></Link>
            </td>
        </tr >
    );
};

export default MyToyRow;