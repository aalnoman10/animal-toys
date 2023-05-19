import { HiOutlinePhotograph } from 'react-icons/hi'
import { RiBriefcaseLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { MdProductionQuantityLimits, MdOutlinePriceChange, MdOutlineDescription } from 'react-icons/md'
import { BiCategoryAlt, BiEqualizer } from 'react-icons/bi'
import { FcRating } from 'react-icons/fc'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'

const AddAToy = () => {

    const { user } = useContext(AuthContext)

    const handleAddToy = (e) => {
        e.preventDefault()

        const form = e.target
        const photo = form.photo.value
        const toyName = form.toyName.value
        const name = form.name.value
        const email = form.email.value
        const subCategory = form.subCategory.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value

        const newToy = {
            photo,
            toyName,
            name,
            email,
            subCategory,
            price,
            rating,
            quantity,
            description
        }

        console.log(newToy);

        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
            .then((res) => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data);
                    alert('successful')
                } else {
                    alert('er')
                }
            })
    }

    return (
        <div className="p-4">
            <h3 className="text-center text-4xl">Add A Toy</h3>
            <p className="text-center text-gray-500 py-3">Give all information for adding your toys </p>
            <form onSubmit={handleAddToy} className="bg-cyan-200 p-5 md:py-8 rounded-lg md:m-8">

                <div className="md:flex my-2">
                    {/* photo url */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Photo URL</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><HiOutlinePhotograph size={30} /></span>
                            <input type="text" name='photo' placeholder="Picture URL of the toy" className="input input-bordered w-full rounded" required />
                        </label>
                    </div>

                    {/* user name */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Toy Name</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><MdProductionQuantityLimits size={30} /></span>
                            <input type="text" name='toyName' placeholder="Enter Toy name" className="input input-bordered w-full rounded" required />
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
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="seller name" className="input input-bordered w-full rounded" required />
                        </label>
                    </div>

                    {/* seller email */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">seller email</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><AiOutlineMail size={30} /></span>
                            <input type="email" name='email' defaultValue={user?.email} placeholder="example@gmail.com" className="input input-bordered w-full rounded" required />
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
                            <input type="text" name='subCategory' placeholder="Sub-category" className="input input-bordered w-full rounded" required />
                        </label>
                    </div>

                    {/* Price */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Price</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><MdOutlinePriceChange size={30} /></span>
                            <input type="number" name='price' placeholder="$ 00.0" className="input input-bordered w-full rounded" required />
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
                            <input type="text" name='rating' placeholder="4.1" className="input input-bordered w-full rounded" required />
                        </label>
                    </div>

                    {/* Available Quantity */}
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            <span className="label-text md:ml-8">Available Quantity</span>
                        </label>
                        <label className="input-group md:w-11/12 mx-auto">
                            <span><BiEqualizer size={30} /></span>
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full rounded" required />
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
                            <textarea name="description" id="" rows="10" className="border border-slate-300 w-full" required></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex mb-3 md:mx-8">
                    <input type="submit" value='Add Toy' className='w-full btn btn-info' />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;
