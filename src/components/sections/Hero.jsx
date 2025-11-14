import {Link} from "react-router-dom"

function Hero() {
    return (

        <section className=" flex  items-center w-screen" style={{
            backgroundImage: `linear-gradient(rgba(109, 40, 217, 0.85), rgba(109, 40, 217, 0.7)), url('/bg 2.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="container mx-auto flex-col text-center">
                <h1 className="text-white text-5xl font-bold mb-5">Power in Your Hands</h1>
                <p className="text-white text-3xl b-7 mx-auto w-150">Get the best smartphones with advanced features, sleek designs and unbeatable performance.</p>
                <div className="flex justify-center">


                    <Link to="/signup">
                     <button className="bg-purple-800 h-12 text-purple-950 px-5 rounded-2xl  m-7 font-bold hover:bg-purple-700">Get Started</button>
                    </Link>
                        
            </div>

            </div>
        </section>
    );
}

export default Hero;