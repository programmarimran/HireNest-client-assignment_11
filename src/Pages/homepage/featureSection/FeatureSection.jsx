import React, { use } from "react";

const hireNestPromise = fetch("/hireNest_section.json").then((res) => res.json());

const FeatureSection = () => {
  const info = use(hireNestPromise);
  const { hireNestInfo } = info;
  const data = hireNestInfo.whyChooseUs;
  const features = data.features;

  return (
    <section className="py-16 w-full ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-primary mb-2">
            {data.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Feature Items */}
        <div className="space-y-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-700 shadow-md border border-gray-300 dark:border-gray-600 rounded-lg p-6 md:gap-12 gap-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Left: Icon */}
              <div className="md:w-1/3 flex justify-center">
                <h1 className="text-7xl">{feature.icon}</h1>
              </div>

              {/* Middle: Vertical dashed bar */}
              <div className="hidden md:flex w-px h-40 border-l-2 border-dashed border-gray-300 dark:border-gray-500"></div>

              {/* Right: Text */}
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;