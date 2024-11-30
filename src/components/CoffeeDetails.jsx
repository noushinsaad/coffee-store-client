import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={photo}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">
                            <span className="font-semibold">Quantity:</span> {quantity}
                        </p>
                        <p className="py-6">
                            <span className="font-semibold">Supplier:</span>   {supplier}
                        </p>
                        <p className="py-6">
                            <span className="font-semibold">Taste:</span>  {taste}
                        </p>
                        <p className="py-6">
                            <span className="font-semibold">Category:</span> {category}
                        </p>
                        <p className="py-6">
                            <span className="font-semibold">Details:</span> {details}
                        </p>
                        <Link to={`/updateCoffee/${_id}`} className="btn btn-primary">
                            Update
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;