import React, { use, useEffect, useState } from "react";
// import { Link, useLoaderData } from "react-router";
import ServiceCard from "../../../shared/ServiceCard";
import Hero from "../hero/Hero";
import ServiceContext from "../../../contexts/ServiceContext";
// import WhyChooseUs from "../whyChoseUs/WhyChooseUs";
// import UserReview from "../userReview/UserReview";
import CustomerReviewsSection from "../customerReviewSection/CustomerReviewsSection";
import FeatureSection from "../featureSection/FeatureSection";
import HireNestStatusCount from "../statusCount/HireNestStatusCount";
import ClientLogosMarquee from "../clientLogosMarque/ClientLogosMarquee";
import axios from "axios";
import Loading from "../../../components/Loading";
import { Link } from "react-router";

const Home = () => {
  const { darkIstrue } = use(ServiceContext);
  // const services = useLoaderData();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`${import.meta.env.VITE_BasicServer}/services/home`)
        .then((res) => {
          setServices(res.data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);
  // console.log(services);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" pb-12">
      <title>HireNest||Home-Page</title>
      <div className=" pt-6 mb-20 md:mb-28">
        <Hero services={services}></Hero>
      </div>
      <section className="mb-20 md:mb-28">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 text-primary`}
        >
          🌟 Popular Services
        </h2>
        <p
          className={`text-center max-w-xl mx-auto mb-10 text-gray-600 dark:text-gray-200`}
        >
          Discover the most booked and top-rated services from our trusted
          providers. Get quality service at your doorstep – fast, easy, and
          reliable!
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {services?.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
      <section className="mb-10 md:mb-8 flex justify-center items-center">
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
      <section className="mb-20 md:mb-28">
        <FeatureSection></FeatureSection>
      </section>
      <section className="mb-20 md:mb-28">
        <ClientLogosMarquee></ClientLogosMarquee>
      </section>
      <section className="mb-20 md:mb-28">
        <CustomerReviewsSection></CustomerReviewsSection>
      </section>
      <section className="mb-20 md:mb-28">
        <HireNestStatusCount></HireNestStatusCount>
      </section>
    </div>
  );
};

export default Home;
