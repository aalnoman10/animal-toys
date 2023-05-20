import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {

    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    console.log(myToys);

    return (
        <div>
            {myToys.map(toy => <>p</>)}
        </div>
    );
};

export default MyToys;