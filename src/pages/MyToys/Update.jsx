import { HiOutlinePhotograph } from 'react-icons/hi'
import { RiBriefcaseLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { MdProductionQuantityLimits, MdOutlinePriceChange, MdOutlineDescription } from 'react-icons/md'
import { BiCategoryAlt, BiEqualizer } from 'react-icons/bi'
import { FcRating } from 'react-icons/fc'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useLoaderData } from 'react-router-dom'

const Update = () => {

    const data = useLoaderData()
    const { _id, price, photo, toyName, description, rating, subCategory, quantity } = data
    const { user } = useContext(AuthContext)

    const handleUpdateToy = (e) => {
        e.preventDefault()

        const form = e.target
        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value

        const update = {
            price,
            quantity,
            description
        }

        fetch(`https://b7a11-toy-marketplace-server-side-aalnoman10.vercel.app/toys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
            .then((res) => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('successful')
                } else {
                    alert('er')
                }
            })
    }

    return (
        <div className="p-4">
            <h3 className="text-center text-4xl p-6">Update Toy</h3>
            <form onSubmit={handleUpdateToy} className="bg-cyan-200 p-5 md:py-8 rounded-lg md:m-8">

                <div className="md:flex my-2">
                    {/* photo url */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Photo URL</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><HiOutlinePhotograph size={30} /></span>
                            <input type="text" name='photo' placeholder="Picture URL of the toy" className="input input-bordered w-full rounded" defaultValue={photo} disabled />
                        </label>
                    </div>

                    {/* user name */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Toy Name</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><MdProductionQuantityLimits size={30} /></span>
                            <input type="text" name='toyName' placeholder="Enter Toy name" className="input input-bordered w-full rounded" defaultValue={toyName} disabled />
                        </label>
                    </div>
                </div>

                <div className="md:flex my-2">
                    {/* seller name */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">seller name</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><RiBriefcaseLine size={30} /></span>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="seller name" className="input input-bordered w-full rounded" disabled />
                        </label>
                    </div>

                    {/* seller email */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">seller email</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><AiOutlineMail size={30} /></span>
                            <input type="email" name='email' defaultValue={user?.email} placeholder="example@gmail.com" className="input input-bordered w-full rounded" disabled />
                        </label>
                    </div>
                </div>

                <div className="md:flex my-2">
                    {/* Sub-category */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Sub-category</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><BiCategoryAlt size={30} /></span>
                            <input type="text" name='subCategory' placeholder="Sub-category" className="input input-bordered w-full rounded" defaultValue={subCategory} disabled />
                        </label>
                    </div>

                    {/* Price */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Price</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><MdOutlinePriceChange size={30} /></span>
                            <input type="number" name='price' placeholder="$ 00.0" className="input input-bordered w-full rounded" defaultValue={price} required />
                        </label>
                    </div>
                </div>

                <div className="md:flex my-2">
                    {/* Rating */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Rating</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><FcRating size={30} /></span>
                            <input type="text" name='rating' placeholder="4.1" className="input input-bordered w-full rounded" defaultValue={rating} disabled />
                        </label>
                    </div>

                    {/* Available Quantity */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Available Quantity</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><BiEqualizer size={30} /></span>
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full rounded" defaultValue={quantity} required />
                        </label>
                    </div>
                </div>

                <div className="flex mb-3 md:mx-8">
                    {/* description */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text">Product Description</span>
                        </label>
                        <label className="input-group">
                            <span><MdOutlineDescription size={30} /></span>
                            <textarea name="description" id="" rows="10" className="border border-slate-300 w-full" defaultValue={description} required></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex mb-3 md:mx-8">
                    <input type="submit" value='Update' className='w-full btn btn-info' />
                </div>
            </form>
        </div>
    );
};

export default Update;
