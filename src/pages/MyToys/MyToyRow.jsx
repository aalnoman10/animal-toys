import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'

const MyToyRow = ({ toys }) => {
    const { _id, price, name, toyName, photo, subCategory, quantity } = toys

    const handleDelete = (id) => {
        const sureConfirm = confirm("Are you sure delete this item");
        if (sureConfirm) {

            fetch(`http://localhost:5000/toys/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Item Delete Successful')
                    }
                    alert(`item cen't delete`)
                }).catch(err => {
                    alert(`item cen't delete ( ${err} )`)
                })
        }
    }

    const handleUpdate = () => {

    }

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
                <button onClick={() => handleUpdate(_id)} className="bg-slate-400 p-2 rounded-full text-white"><BiEdit size={20} /></button>
            </td>
        </tr >
    );
};

export default MyToyRow;