import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import ServiceCard from "../../../shared/ServiceCard";
import Hero from "../hero/Hero";
import ServiceContext from "../../../contexts/ServiceContext";
import WhyChooseUs from "../whyChoseUs/WhyChooseUs";
import UserReview from "../userReview/UserReview";

const Home = () => {
  const { darkIstrue } = use(ServiceContext);
  const services = useLoaderData();
  // console.log(services);
  return (
    <div className=" pb-12">
      <title>HireNest||Home-Page</title>
      <div className=" pt-6">
        <Hero services={services}></Hero>
      </div>
      <section className="py-16 pb-4">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 text-primary`}
        >
          🌟 Popular Services
        </h2>
        <p
          className={`text-center max-w-xl mx-auto mb-6 text-gray-600 dark:text-gray-200`}
        >
          Discover the most booked and top-rated services from our trusted
          providers. Get quality service at your doorstep – fast, easy, and
          reliable!
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {services?.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
      <section className="py-8 pb-4 flex justify-center items-center">
        <Link to={"/services"}>
        <button
          className={`mt-1 px-3 py-1 text-sm rounded transition duration-200 ${
            darkIstrue
              ? "bg-blue-600 hover:bg-blue-500 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Show All Service
        </button>
        </Link>
      </section>
      <section className="py-16 pb-4">
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section className="py-16 pb-4">
        <UserReview></UserReview>
      </section>
    </div>
  );
};

export default Home;
