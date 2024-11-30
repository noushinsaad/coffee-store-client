import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, name, quantity, taste, category, photo } = coffee;

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-omega-sand.vercel.app/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            // eslint-disable-next-line react/prop-types
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div className="flex flex-col lg:flex-row items-center justify-around p-6 bg-base-100 shadow-xl rounded-xl">
            <figure>
                <img
                    src={photo}

                    alt={name} />
            </figure>
            <div className="flex justify-between items-center w-full p-6">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>

                    <p>Taste: {taste}</p>
                    <p>Category: {category}</p>

                </div>
                <div className="justify-end">
                    <div className="join join-vertical space-y-4">
                        <Link to={`/coffees/${_id}`} className="btn btn-accent">
                            View
                        </Link>
                        <Link to={`/updateCoffee/${_id}`} className="btn btn-primary">
                            Edit
                        </Link>
                        <button
                            className="btn bg-error"
                            onClick={() => handleDelete(_id)}>Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;