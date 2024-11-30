import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const SignIn = () => {

    const { signInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)

                // update last login time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`https://coffee-store-server-omega-sand.vercel.app/users`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('sign in info updated un db', data)
                    })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div className="w-3/4 mx-auto bg-base-200">
            <div className="">
                <div className="bg-base-100 w-full p-6  shadow-2xl">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                    <p>Don&apos;t have an account? Please <Link to='/signup'><span className="text-blue-800 font-semibold">Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;