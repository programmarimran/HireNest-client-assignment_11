import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import ServiceContext from "../contexts/ServiceContext";

const Hero = ({ services }) => {
  const { darkIstrue } = use(ServiceContext);
  console.log(services[0].imageUrl);
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="my-4"
      >
        {services?.map((service) => (
          <SwiperSlide key={service._id}>
            <div className="hero h-[180px] md:h-[400px] rounded-2xl overflow-hidden relative">
              <img className=" object-cover object-bottom" src={service?.imageUrl} alt="image" />
              <div className="absolute inset-0 bg-gray-800/60  flex items-center justify-center  text-center px-4">
                <div className="max-w-md text-white z-50">
                  <h2 className="text-xl md:text-3xl font-bold mb-2">
                    {service.serviceName}
                  </h2>
                  <p className="text-sm md:text-base">
                    🧑‍🔧 <strong>{service.provider.name}</strong> | 📍{" "}
                    {service.serviceArea}
                  </p>
                  <p className="text-sm md:text-base mt-1">
                    💰 <span className="font-semibold">৳{service.price}</span>
                  </p>
                  <button
                    className={`mt-3 px-4 py-1 text-sm rounded transition duration-200 ${
                      darkIstrue
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
