
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";

function NewMerchandise() {
  // Merchandise items for the slider
  const newMerchandise = [
    {
      id: 1,
      image: "/Customr Care.png",
      title: "Phone Sales",
    },
    {
      id: 2,
      image: "/Product 1.jpg",
      title: "Phone Repairs",
    },
    {
      id: 3,
      image: "/Product 2.jpg",
      title: "Accessories",
    },
    {
      id: 4,
      image: "/Product 3.jpg",
      title: "Trade-In Program",
    },

    {
      id: 5,
      image: "/Product 4.jpg",
      title: "Warranty Services",
    },
    
  ];

  return (
    <section className="container mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {/* LEFT SIDE: Section title & description */}
        <div>
          <h3 className="text-3xl font-bold text-blue-950 md:text-4xl mb-10">
          Our Services
          </h3>
          <p className="text-lg mb-8 md:text-xl text-gray-700">
            We provide fast, reliable, and affordable phone repair solutions — 
            from screen fixes to diagnostics — all done with expert care.
          </p>
          <button className="bg-violet-500 text-white px-4 py-2 rounded">Shop Now <FaArrowRight className="inline-block text-lg" /></button>
          
        </div>

        {/* RIGHT SIDE: SLIDER  */}
        <div className="lg:col-span-3">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full"
          >
            {newMerchandise.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col  items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-70 rounded-2xl border border-gray-300 shadow-md object-contain bg-white"
                  />
                  <h3 className="text-xl mt-3 font-bold text-gray-900 text-center">
                    {item.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default NewMerchandise;
