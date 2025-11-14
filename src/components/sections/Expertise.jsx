import { FaCheckCircle } from "react-icons/fa";


function Expertise() {
    return (

        <section className="container mx-auto py-7">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 items-center overflow-hidden mx-auto">
                <div>
                    <img src="/expertise 1.jpg" alt="collaboration photo" className="w-full h-auto object-cover rounded-3xl" />
                </div>

                <div className="container mx-auto">
                    <h2 className="text-4xl  text-violet-700 font-bold  mb-4 mt-8 md:text-5xl ">Empowering you to connect</h2>
                    <p className="text-lg  text-violet-700 mb-6 md:text-xl">At ePhone, we are dedicated to providing the best phone buying experience.</p>

                    <ul className=" text-violet-700 mt-9 space-y-4">

                        <li className="text-lg flex items-start  gap-4 mb-2 md:text-xl"><FaCheckCircle className=" text-violet-700 text-lg mr-2" />  Wide selection of top brands and models</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className=" text-violet-700 text-lg mr-2" />  Competitive pricing and deals.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className=" text-violet-700 text-lg mr-2" />  Fast and reliable delivery.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className=" text-violet-700 text-lg mr-2" />  Expert advice and support.</li>
                    </ul>
                </div>
            </div>

        </section>

    )
}


export default Expertise
