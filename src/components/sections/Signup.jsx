import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    // function for handling the signup after submit is clicked
    const handleSignup = async (e) => {
        try {
            e.preventDefault();
            await axios.post('https://ephone-backend.onrender.com/register', { name, email, password });
            alert('You have sucesfully Registered Login now');
            navigate('/login')

        } catch (error) {
            console.error(error)
            alert('Error has occured ')
        }


    }


    return (

        <section className=" mx-auto bg-gray-100 min-h-screen flex items-center justify-center w-full ">
            <div className=" w-[450px] mx-auto mt-20 p-6 bg-violet-700  rounded-lg shadow-md ">
                <form onSubmit={handleSignup}>
                    <h1 className="text-white font-bold text-center text-2xl">Sign Up</h1> <br />
                    <div className="flex items-center gap-4">
                        <FaUser className="text-sm text-white" />
                        <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} className="p-3 border border-gray-300 outline-none bg-white w-full mb-4 rounded-md" required /> <br />
                    </div>
                    <div className="flex items-center gap-4">
                        <MdEmail className="text-sm text-white" />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 border border-gray-300 outline-none bg-white w-full mb-4 rounded-md" required /> <br />
                    </div>

                    <div className="flex items-center gap-4">
                        <FaLock className="text-sm text-white" />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-3 border border-gray-300 outline-none bg-white w-full mb-4 rounded-md" required /> <br />
                    </div>



                    <button type="submit" className="mt-4 p-3 w-full bg-violet-500 hover:bg-violet-400 cursor-pointer text-white rounded-md">Sign  Up</button>
                </form>
                <p className="text-center text-white mt-4">Already have an account? <Link to="/login" className="text-white hover:underline">Log in</Link></p>
            </div>
        </section>


    )
}

export default Signup