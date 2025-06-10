import React, { use } from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../../components/ServiceCard";
import Hero from "../../components/Hero";
import ServiceContext from "../../contexts/ServiceContext";

const Home = () => {
  const {darkIstrue}=use(ServiceContext)
  const services = useLoaderData();
  console.log(services);
  return (
    <>
      <div className=" pt-6">
        <Hero services={services}></Hero>
      </div>
      <section className="py-16 pb-4">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 ${
            darkIstrue ? "text-white" : "text-black"
          }`}
        >
          🌟 Popular Services
        </h2>
        <p
          className={`text-center max-w-xl mx-auto mb-6 ${
            darkIstrue ? "text-gray-300" : "text-gray-600"
          }`}
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
    </>
  );
};

export default Home;
