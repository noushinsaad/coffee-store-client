import { Link, useLoaderData } from "react-router-dom";

import { useState } from "react";
import CoffeeCard from "./CoffeeCard";


const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);


    return (
        <div>
            <div className='m-6 p-6 lg:m-20 bg-[#f4f3f0] lg:p-20'>
                <div className='text-center space-y-4'>
                    <p className='text-center text-[#1B1A1A]'>--- Sip & Savor ---</p>
                    <h1 className='text-6xl text-center text-[#331A15]'>Our Popular Products</h1>
                    <Link className='btn bg-[#E3B577] text-white' to='/addCoffee'>Add Coffee</Link>
                </div>
                <div className='grid md:grid-cols-2 gap-4 mt-6'>
                    {
                        coffees.map(coffee => <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}>
                        </CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;