import React, { use, useEffect, useState } from "react";
import {
  FaTools,
  FaUsers,
  FaThumbsUp,
  FaGlobeAsia,
  FaStar,
} from "react-icons/fa";
import CountUp from "react-countup";
import axios from "axios";
const diverseDishPromise = fetch("/hireNest_section.json").then((res) =>
  res.json()
);
const HireNestStatusCount = () => {
    const info = use(diverseDishPromise);
  const { hireNestInfo } = info;
  const data = hireNestInfo.userReviews;
  console.log(data)
  const [serviceCount, setServiceCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    // Fetch total services
    axios
      .get(`${import.meta.env.VITE_BasicServer}/service-count`)
      .then((res) => {
        setServiceCount(res.data?.count);
        console.log(res.data);
      });
    // Fetch total bookings
    axios
      .get(`${import.meta.env.VITE_BasicServer}/service-booking-count`)
      .then((res) => {
        setBookingCount(res.data?.count);
        console.log(res.data);
      });
  }, []);

  const stats = [
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      quantity: serviceCount, 
      name: "Total Providers",
    },
    {
      icon: <FaTools className="text-4xl text-green-600" />,
      quantity: serviceCount,
      name: "Services Listed",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-pink-500" />,
      quantity: bookingCount,
      name: "Successful Bookings",
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-purple-600" />,
      quantity: 64,
      name: "Service Areas Covered",
    },
    {
      icon: <FaStar className="text-4xl text-yellow-500" />,
      quantity: data.reviews.length,
      name: "Positive Reviews",
    },
  ];

  return (
    <section className="my-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        HireNest by the Numbers
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-11/12 mx-auto">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 text-center shadow-md border bg-white border-gray-200 text-gray-800 hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">
              <CountUp
                start={0}
                end={item.quantity}
                duration={
                  item.quantity < 500 ? 4 : item.quantity < 2000 ? 6 : 8
                }
                suffix="+"
              />
            </h1>
            <p className="mt-2 text-sm md:text-base">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HireNestStatusCount;
