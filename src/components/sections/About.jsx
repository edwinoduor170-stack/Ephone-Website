import { FaCheckCircle } from "react-icons/fa";

function About() {
    return (
        <section className="contaner mx-auto py-5 px-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div className="container mx-auto">
                    
                    <h2 className="text-4xl  text-violet-700 font-bold  mb-4 mt-8 md:text-5xl ">About ePhone</h2>
                    <p className="text-lg  text-violet-700 mb-6 md:text-xl">At ePhone, we are passionate about connecting people through cutting-edge mobile technology. Our mission is to provide our customers with the best selection of smartphones, accessories, and services to enhance their digital lives.</p>
                </div>

                <div>
                    <img src="/Expertise 2.jpg" alt="collaboration photo" className="w-full h-auto object-cover rounded-2xl" />
                </div>
            </div>


        </section>
    )
}


export default About