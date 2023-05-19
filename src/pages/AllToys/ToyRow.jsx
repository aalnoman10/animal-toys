import React from 'react';

const ToyRow = ({ toys }) => {
    const { price, name, toyName, subCategory, quantity } = toys

    console.log(toys);

    return (
        <tr>
            <td>{name}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td><button className="btn btn-info">details</button></td>
        </tr>
    );
};

export default ToyRow;