import React, { use } from "react";
import ServiceContext from "../contexts/ServiceContext";

const diverseDishPromise = fetch("/extra-section.json").then((res) =>
  res.json()
);

const CustomerReviews = () => {
  const { darkIstrue } = use(ServiceContext);
  const info = use(diverseDishPromise);

  const { hireNestInfo } = info;
  const data = hireNestInfo.userReviews;
  const features = data.reviews;

  return (
    <div>
      <div>
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-2 text-primary`}
        >
          Hear From Our Happy Clients
        </h2>
        <p
          className={`text-center max-w-xl mx-auto mb-6 text-gray-600 dark:text-gray-200`}
        >
          Real feedback from our satisfied customers who trusted our services.
          See what they have to say about their experience with HireNest!
        </p>
      </div>

      <div
        data-aos="fade-up-right"
        className="grid grid-cols-1 mt-6 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6 px-4 md:px-0"
      >
        {features?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-8 space-y-4 rounded-2xl
             shadow-lg bg-[#2F80ED40] border-2 border-[#2F80ED40] hover:border-[#2F80ED50]"
          >
            <p
              className={`text-lg font-medium first-letter:text-3xl first-letter:font-bold first-letter:uppercase ${
                darkIstrue ? "text-white" : "text-black"
              }`}
            >
              {item.comment}
            </p>

            <h1
              className={`text-xl font-bold ${
                darkIstrue ? "text-white" : "text-black"
              }`}
            >
              Location:{" "}
              <span
                className={`${
                  darkIstrue ? "text-white" : "text-black"
                } font-semibold`}
              >
                {item.location}
              </span>
            </h1>

            <div className="flex space-x-1 items-center">
              <span className={`${darkIstrue ? "text-white" : "text-black"}`}>
                Rating:
              </span>
              {[1, 2, 3, 4, 5].map((num, i) =>
                num <= item.rating ? (
                  <p
                    key={i}
                    className={`${darkIstrue ? "text-white" : "text-black"}`}
                  >
                    ⭐
                  </p>
                ) : (
                  <p
                    key={i}
                    className={`${darkIstrue ? "text-white" : "text-black"}`}
                  >
                    ☆
                  </p>
                )
              )}
            </div>

            <hr className={`border-2 border-dashed border-[#2F80ED40]`} />

            <div className="flex items-center space-x-4">
              <img
                className="h-10 w-10 rounded-full border-2 border-[#2F80ED40]"
                src={item.image}
                alt={item.name}
              />
              <h3
                className={`font-bold text-2xl ${
                  darkIstrue ? "text-white" : "text-black"
                }`}
              >
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
