import React, { use } from "react";
import ServiceContext from "../contexts/ServiceContext";

const diverseDishPromise = fetch("/extra-section.json").then((res) =>
  res.json()
);

const WhyChooseUs = () => {
  const { darkIstrue } = use(ServiceContext);
  const info = use(diverseDishPromise);

  const { hireNestInfo } = info;
  const data = hireNestInfo.whyChooseUs;
  const features = data.features;

  return (
    <div >
      <div>
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 ${
            darkIstrue ? "text-white" : "text-black"
          }`}
        >
          {data.title}
        </h2>
        <p
          className={`text-center max-w-xl mx-auto mb-6 ${
            darkIstrue ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {data.description}
        </p>
      </div>

      <div data-aos="fade-up-right" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
        {features.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between p-8 space-y-4 rounded-2xl
             shadow-lg  border-2 border-slate-200 hover:border-slate-400
              ${
                darkIstrue
                  ? "bg-gradient-to-t from-slate-900 to-slate-800 text-gray-300"
                  : "bg-gradient-to-t from-[#2F80ED40] to-[#dbeafe] text-gray-800"
              }`}
          >
            <p className="text-7xl">{item?.icon && item.icon}</p>
            <h1 className="text-2xl">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
