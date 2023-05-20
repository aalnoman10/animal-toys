import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'

const MyToyRow = ({ toys }) => {
    const { price, name, toyName, photo, subCategory, quantity } = toys

    console.log(toys);

    return (
        <tr>
            <td>{name}</td>
            <td><img className="max-h-[125px] max-w-[125px] rounded-lg" src={photo} alt={toyName} /></td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>
                <button className="bg-slate-400 p-2 rounded-full text-white mb-2"><AiOutlineDelete size={20} /></button>
            </td>
            <td>
                <button className="bg-slate-400 p-2 rounded-full text-white"><BiEdit size={20} /></button>
            </td>
        </tr >
    );
};

export default MyToyRow;