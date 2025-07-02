import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import ServiceContext from "../../../contexts/ServiceContext";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
// import { ZoomIn } from "lucide-react";
// import { motion } from "motion/react";

const Hero = ({ services }) => {
  const { darkIstrue } = use(ServiceContext);
  // console.log(services[0].imageUrl);

  //hero image 1 https://i.ibb.co/PZsHtCGm/service2.webp
  // her image 2 https://i.ibb.co/Zp42qbK6/service3.png

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="my-4"
      >
        {services?.map((service) => (
          <SwiperSlide key={service._id}>
            <div
              className={` hero h-[180px] md:h-[400px] rounded-2xl overflow-hidden relative ${
                darkIstrue ? "border border-gray-500" : ""
              }`}
            >
              <img
                className=" object-cover object-bottom rounded-2xl"
                src={service?.imageUrl}
                alt="image"
              />
              <div className=" absolute border inset-0 bg-gray-800/60  flex items-center justify-center  text-center px-4">
                <div className="  text-white z-50 flex justify-between gap-4 items-center">
                  {/* aside 1 text and details button */}
                  <div className=" ">
                    <motion.h2
                      animate={{
                        scale: "0",
                      }}
                      className="text-md md:text-5xl font-bold mb-2"
                    >
                      {service.serviceName}
                    </motion.h2>
                    <div className="flex items-center gap-2">
                      <img
                        src={service.provider.photoUrl}
                        alt={service.provider.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <strong className={`text-sm md:text-base`}>
                        {service.provider.name}
                      </strong>
                      <span>| 📍 {service.serviceArea}</span>
                    </div>

                    <p className="text-sm md:text-base mt-1">
                      💰 <span className="font-semibold">৳{service.price}</span>
                    </p>
                    <Link to={`/dashboard/service-details/${service?._id}`}>
                      <motion.button
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`mt-3 px-4 py-1 text-sm md:text-lg rounded transition duration-200 ${
                          darkIstrue
                            ? "bg-blue-600 hover:bg-blue-500 text-white"
                            : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                      >
                        <motion.span
                          animate={{
                            color: ["#ff5733", "#33ff33","#ffffff"],
                            transition: { duration: 2, delay:1, repeat: Infinity },
                          }}
                        >
                          View Detail
                        </motion.span>
                      </motion.button>
                    </Link>
                  </div>
                  {/* aside 2 image animation with framer motion */}
                  <div className="md:flex hidden">
                    <motion.img
                      animate={{ y: [-20, -100, -20], x: [200, 200] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="w-[300px] object-cover rounded-tl-2xl rounded-bl-2xl rounded-br-2xl border-l-4 border-b-4"
                      src="https://i.ibb.co/PZsHtCGm/service2.webp"
                      alt="service1"
                    />
                    <motion.img
                      animate={{ x: [0, 100, 0], y: [50, 50] }}
                      transition={{ duration: 10, delay: 3, repeat: Infinity }}
                      className=" w-[300px] object-cover rounded-bl-2xl rounded-tl-2xl rounded-br-2xl border-green-500 border-l-4 border-b-4"
                      src="https://i.ibb.co/Zp42qbK6/service3.png"
                      alt="service1"
                    />
                  </div>
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
