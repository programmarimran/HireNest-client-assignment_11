import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./customCarousel.css";
import { use } from "react";
import CustomerReviewCard from "./CustomerReviewCard";
import useWindowWidth from "../../../hooks/useWindowWidth";

const diverseDishPromise = fetch("/hireNest_section.json").then((res) =>
  res.json()
);

const CustomerReviewsSection = () => {
  const info = use(diverseDishPromise);

  const { hireNestInfo } = info;
  const data = hireNestInfo.userReviews;
  const reviewData = data.reviews;
  const width = useWindowWidth();

  // Adjust centerSlidePercentage based on screen width
  const centerSlidePercentage = width < 640 ? 100 : width < 1024 ? 50 : 33.33;
  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        What Our Clients Say About HireNest
      </h2>
      <p className="text-center mb-10">
        From home repairs to tech fixes — our users trust HireNest for quick,
        reliable, and affordable service. Read what they have to say about their
        experience with our platform.
      </p>

      <div className="max-w-6xl mx-auto px-4 customCarousel">
        <Carousel
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={false}
          emulateTouch
        >
          {reviewData.map((review) => (
            <div className="carousel-slide" key={review.id}>
              <CustomerReviewCard reviewData={review} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
