import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(newCoffee);

        // send data to the server
        fetch('https://coffee-store-server-omega-sand.vercel.app/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }


    return (
        <div>
            <div className='my-6 flex items-center gap-2 pl-16'>
                <IoReturnUpBackOutline />
                <Link className='font-semibold' to='/'>Back to Home</Link>
            </div>
            <div className="bg-[#f4f3f0] p-24">
                <h2 className="text-3xl font-extrabold">Add aCoffee</h2>
                <form onSubmit={handleAddCoffee}>
                    {/* form row name and quantity */}
                    <div className="md:flex md:gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="join">
                                {/* <span className="join-item bg-gray-200 p-3">Name</span> */}
                                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered join-item w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="join">
                                {/* <span className="join-item bg-gray-200 p-3">Name</span> */}
                                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered join-item w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form row supplier and taste */}
                    <div className="md:flex md:gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="join">
                                {/* <span className="join-item bg-gray-200 p-3">Name</span> */}
                                <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered join-item w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="join">
                                {/* <span className="join-item bg-gray-200 p-3">Name</span> */}
                                <input type="text" name="taste" placeholder="Taste" className="input input-bordered join-item w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row photo url */}
                    <div className="md:flex md:gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="join">
                                {/* <span className="join-item bg-gray-200 p-3">Name</span> */}
                                <input type="text" name="category" placeholder="Category" className="input input-bordered join-item w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="join">
                                {/* <span className="join-item bg-gray-200 p-3">Name</span> */}
                                <input type="text" name="details" placeholder="Details" className="input input-bordered join-item w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="join">
                                {/* <span className="join-item bg-gray-200 p-3">Name</span> */}
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered join-item w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn  btn-block btn-accent mt-8" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;