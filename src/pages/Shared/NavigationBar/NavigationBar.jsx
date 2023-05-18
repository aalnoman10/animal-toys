import { Link } from 'react-router-dom';
import logo from '../../../assets/toy.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {

    const { user, logout, setUser } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('success');
                setUser(null)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const li = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-toys'>All Toys</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {user && <>
            <li><Link to='/my-toys'>My Toys</Link></li>
            <li><Link to='/add-a-toy'>Add A Toy</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
        </>}
    </>

    return (
        <div className="navbar bg-slate-500 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                </div>
                <div className='flex items-center pl-2'>
                    <img src={logo} className='w-14 rounded-lg' alt="" />
                    <span className="btn btn-ghost normal-case text-xl p-1">Animal Toy</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {li}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <img src={user?.photoURL} className='w-14 rounded-full' title={user?.displayName} alt="User profile" /> : <Link to='login' className='btn btn-ghost normal-case text-xl'>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavigationBar;