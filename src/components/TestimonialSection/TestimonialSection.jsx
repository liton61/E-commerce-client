import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TestimonialSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section my-16 border">
      <div className="container mx-auto px-5">
        <h2 className="text-2xl font-bold text-center pt-5 text-orange-600 uppercase">
          What our client say !
        </h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-lg text-gray-700 mb-4">{review.details}</p>
                <Rating
                  className="max-w-80 mx-auto mb-3"
                  style={{ maxWidth: 80 }}
                  value={review.rating}
                  readOnly
                />

                <p className="font-bold text-orange-600">{review.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
