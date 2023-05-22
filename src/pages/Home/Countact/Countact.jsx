const Contact = () => {
    return (
        <div className="p-8">
            <h3 className="text-3xl font-semibold pb-2 text-center">Contact</h3>
            <div className="md:flex justify-between items-center">
                <div style={{ flexBasis: '30%' }} className="p-8 grid place-items-center">
                    <img className="max-w-full max-h-full" src="https://i.ibb.co/gMpbY8c/pngwing-com.png" alt="img" />
                </div>
                <div style={{ flexBasis: "65%" }} className="rounded-lg shadow-md p-4">
                    <div className="grid gap-4 md:grid-cols-2 mb-4">
                        <input className="bg-slate-100 rounded-md p-2" type="text" name="name" placeholder="Name" />
                        <input className="bg-slate-100 rounded-md p-2" type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 mb-4">
                        <input className="bg-slate-100 rounded-md p-2" type="tel" placeholder="Number" />
                        <input className="bg-slate-100 rounded-md p-2" type="text" placeholder="Subject" />
                    </div>
                    <div className="mb-4">
                        <textarea className="bg-slate-100 rounded-md p-2 w-full" placeholder="Masseage" rows="10"></textarea>
                    </div>
                    <button className="font-medium btn bg-[#662266]">Send Masseage</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;