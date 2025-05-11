import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser}=use(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault();
        console.log(e.target);
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log({name, photo, email, password});
        createUser(email, password)
        .then(result =>{
            const result =result.user;
            console.log(user);
            
        })
    }


    return (
         <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* name */}
                        <label className="label">Your Name</label>
                        <input 
                        type="text" 
                        name='name' 
                        className="input" 
                        required
                        placeholder="Enter your name" />

                        {/* photo url */}
                        <label className="label">Photo Url</label>
                        <input 
                        type="text" 
                        name='photo' 
                        className="input"
                        required 
                        placeholder="Enter your url" />

                        {/* email */}
                        <label className="label">Email</label>
                        <input 
                        type="email" 
                        name='email' 
                        className="input" 
                        required
                        placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <input 
                        type="password"
                        name='password'
                        className="input" 
                        required
                        placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                        <p className='font-semibold text-center pt-5'>Already have an account? <Link className='text-secondary hover:underline'  to="/auth/login">Login</Link></p>
                    </fieldset>
                </form>
                </div>
            </div>
    );
};

export default Register;