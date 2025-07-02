import React from "react";

const About = () => {
  return (
    <div className=" text-gray-800 dark:text-gray-50 px-4 md:px-10 py-10 md:py-20 max-w-7xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          About HireNest
        </h1>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-50 ">
          Welcome to <strong>HireNest</strong> — your trusted platform for hiring and offering services with ease and confidence. Whether you are a freelancer, service provider, small business, or someone in need of a skilled hand, HireNest connects the right people together. We are committed to streamlining the hiring process and bringing value to every transaction.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Our Mission</h2>
        <p className="text-lg leading-relaxed text-justify">
          Our mission is to create an inclusive, user-friendly, and reliable digital environment where service seekers and service providers can connect effortlessly. We aim to reduce the gap between opportunity and talent by promoting local skills and fostering professional growth.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Service Listings by skilled individuals & businesses</li>
          <li>Easy and secure booking system</li>
          <li>Real-time status tracking of parcels & services</li>
          <li>Review & rating system for transparency</li>
          <li>Instant messaging between clients and service providers</li>
          <li>Custom invoicing and downloadable receipts</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Why Choose HireNest?</h2>
        <p className="text-lg leading-relaxed text-justify">
          <strong>HireNest</strong> stands apart by offering not just a marketplace, but a growing community of dedicated professionals. We prioritize trust, accountability, and quality service. With a seamless user experience, responsive support, and modern features like dark mode, live chat, and a mobile-first design — we ensure your time here is productive and pleasant.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Our Vision</h2>
        <p className="text-lg leading-relaxed text-justify">
          To become the leading platform in Bangladesh (and beyond) that empowers both individual freelancers and businesses. We envision a future where no skill goes unnoticed and every service seeker finds the right helping hand in just a few clicks.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Meet the Creator</h2>
        <p className="text-lg leading-relaxed text-justify">
          <strong>Md Imran Hasan</strong>, a passionate MERN Stack Developer, built HireNest with the dream of simplifying how people hire and offer services. As a JavaScript enthusiast and lifelong learner, Imran believes in clean design, scalable architecture, and solving real-life problems through code.
        </p>
      </section>

      <section className="text-center">
        <p className="text-lg mt-10">
          💬 Got questions or suggestions? Feel free to reach out via our <a href="/contact" className="text-blue-500 underline">Contact Page</a>. Let’s build a smarter service ecosystem together.
        </p>
      </section>
    </div>
  );
};

export default About;
