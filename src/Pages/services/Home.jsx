import React from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../../components/ServiceCard";
import Hero from "../../components/Hero";


const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <>
    <div className=" pt-6">
      <Hero services={services}></Hero>
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
      {services?.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
    </>
  );
};

export default Home;
