import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Josh Smith",
        role: "Manager Royal Media",
        text:"I recently bought a phone from this company and I'm blown away by the quality and service! The phone is sleek, fast, and has amazing camera quality. The prices are unbeatable and the delivery was super quick. Highly recommend!",
        image: "/Testmn 1.jpg",
    },
    {
        id: 2,
        name: "Anna Wamboi",
        role: "Marketing@ Coca-Cola",
        text: "I'm loving my new phone from this company! The battery life is amazing and the camera quality is top-notch. Highly recommend!",
        image: "/Testmn 2.jpg",
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Local Fruits Vendor",
        text: "I was hesitant at first, but the price was too good to pass up. I'm glad I took the leap - great phone, great service!",
        image: "/Testmn 3.jpg",
    },
    {
        id: 4,
        name: "John Nolan",
        role: "Forklift Operator Nas",
        text: "Fast delivery and excellent customer service. The phone is exactly as described. 10/10 would recommend!",
        image: "/testmn 4.jpg"
    },

    {
        id: 5,
        name: "Sarah Lee",
        role: "Chef Hilton Hotel",
        text: "I've had my phone for a week now and I'm impressed. The performance is smooth and the design is sleek. Great purchase!",
        image: "/Testmn 5.jpg"
    },
    {
        id: 6,
        name: "Sarah Owino",
        role: "CEO Yetu Restaurants",
        text: "Best phone I've ever owned! The features are lit and the price is unbeatable. Thanks for the great service!",
        image: "/Testmn 6.jpg"
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const { name, role, text, image } = testimonials[index];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            <div >
                <h2 className="text-4xl font-bold text-blue-950 mb-10">
                    What People Are Saying About Us
                </h2>

                <div className="flex items-center gap-4 mb-6 transition-all duration-500">
                    <img
                        src={image}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                        <p className="text-sm text-gray-500">{role}</p>
                    </div>
                </div>

                <p className="text-gray-700  text-xl italic mb-15 leading-relaxed transition-all duration-500">
                    "{text}"
                </p>

                <div className="flex items-center gap-4 mt-8">
                    <button
                        onClick={prevSlide}
                        className="p-3 bg-gray-500 text-white hover:bg-orange-700 rounded-full transition"
                    >
                        <FaChevronLeft className="cursor-pointer" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 bg-gray-500 text-white hover:bg-orange-700 rounded-full transition"
                    >
                        <FaChevronRight className="cursor-pointer" />
                    </button>
                </div>
            </div>

            <div className="flex justify-center shadow-md" >
                <img
                    src="/Product 4.jpg"
                    alt="testimonial background"
                    className="w-full h-[400px] object-cover rounded-xl shadow-md"
                />
            </div>
        </section>
    );
};

export default Testimonials;
