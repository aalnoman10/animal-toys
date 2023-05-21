import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { SlLock } from 'react-icons/sl'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastError, ToastSuccess } from '../../main';
import { Toaster } from 'react-hot-toast';

const Resister = () => {

    const { setUser, loginWithEmailAndPassword } = useContext(AuthContext)

    const handleResister = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        loginWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                ToastSuccess("user login successful")
                updateProfile(user, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        ToastSuccess("user photo and name updated")
                    })
                    .catch((error) => {
                        ToastError()
                    });
                setUser(result.user)
            })
            .catch((error) => {
                ToastError()
            });
    }

    return (
        <div className="flex flex-col md:flex-row md:justify-evenly items-center bg-slate-100 p-8">
            <Toaster />
            <div className='px-8 md:px-0 py-4 md:py-0 order-2 md:order-1'>
                <h3 className="text-3xl">Animal Toys</h3>
                <p>This is the best Market selling animal toys. Resister now to subscribe</p>
            </div>
            <div className='order-1 md:order-2'>
                <div style={{ width: '350px' }} className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg">
                    <form onSubmit={handleResister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                                <span><BiUser size={30} /></span>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered w-full" required />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                                <span><AiOutlineMail size={30} /></span>
                                <input type="email" name='email' placeholder="Example@gmail.com" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <label className="input-group">
                                <span><SlLock size={30} /></span>
                                <input type="password" name='password' placeholder="Secret password" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control  mb-3">
                            <label className="label">
                                <span className="label-text">Your Photo Url</span>
                            </label>
                            <label className="input-group">
                                <span><AiOutlineMail size={30} /></span>
                                <input type="text" name='photo' placeholder="https//:fgvdvt/fg/gdr.com" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <input type="submit" value='Resister' className='w-full btn btn-info' />
                    </form>
                    <p className="p-5 text-center">Already have an account? <Link to='/login'><button className="font-bold text-blue-500 link">Login</button></Link></p>
                </div>
            </div>
        </div >
    );
};

export default Resister;