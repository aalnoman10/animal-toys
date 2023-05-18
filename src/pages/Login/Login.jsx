import { Link } from 'react-router-dom'
import { BsGoogle, BsFacebook, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { useContext } from 'react';
import { SlLock } from 'react-icons/sl'
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { setUser, loginUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="flex flex-col md:flex-row md:justify-evenly items-center bg-slate-100 p-8">
            <div className='px-8 md:px-0 py-4 md:py-0 order-2 md:order-1'>
                <h3 className="text-3xl">Animal Toys</h3>
                <p>This is the best Market selling animal toys. Login now to subscribe</p>
            </div>
            <div className='order-1 md:order-2'>
                <div className="p-5 text-center">
                    <h3 className=" text-3xl font-medium">Welcome beck</h3>
                    <p>Don't have an account? <Link to='/resister'><button className="font-bold text-blue-500 link">Sing Up</button></Link></p>
                </div>
                <div>
                    <div style={{ width: '350px' }} className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg">
                        <form onSubmit={handleLogin}>
                            <h4 className="text-center text-2xl font-semibold">Email & Password</h4>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <label className="input-group">
                                    <span><AiOutlineMail size={30} /></span>
                                    <input type="email" name='email' placeholder="Example@gmail.com" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <label className="input-group">
                                    <span><SlLock size={30} /></span>
                                    <input type="password" name='password' placeholder="Secret" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <input type="submit" value='Login' className='w-full btn btn-info' />
                        </form>
                        <div>
                            <hr className='mt-4' />
                            <h4 className="text-center text-2xl font-semibold">Continue with</h4>
                            <p className="flex justify-center items-center gap-2 py-2">
                                <button className="btn btn-ghost p-0 px-3"><BsGoogle size={25} /></button>
                                <button className="btn btn-ghost p-0 px-3"><BsGithub size={25} /></button>
                                <button className="btn btn-ghost p-0 px-3"><BsFacebook size={25} /></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;