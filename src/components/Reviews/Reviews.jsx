import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import author_1_img from "../../assets/images/pic-2.png";
import author_2_img from "../../assets/images/pic-3.png";
import author_3_img from "../../assets/images/pic-4.png";

const reviews = [
  {
    author_name: "Aman Gupta ",
    author_img: author_1_img,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex labore odio fuga doloremque sequi in asperiores ea, nisi ullam?",
    rate: 4,
  },
  {
    author_name: "Shubham Singh",
    author_img: author_2_img,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex labore odio fuga doloremque sequi in asperiores ea, nisi ullam?",
    rate: 3,
  },
  {
    author_name: "Devansh",
    author_img: author_3_img,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex labore odio fuga doloremque sequi in asperiores ea, nisi ullam?",
    rate: 4,
  },
];

export const Reviews = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setSectionInView("reviews");
    }
  }, [inView]);
  return (
    <section ref={ref} id="reviews" className="relative reviews ">
      <h1 className="uppercase text-center font-bold text-3xl pb-20">
        <span className="text-warning">r</span>eviews
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-10">
        {reviews.map((review, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="avatar flex items-center justify-center -mt-10">
              <div className="w-24 rounded-full">
                <img src={review.author_img} />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title text-accent justify-center">
                {review.author_name}
              </h2>
              <p className="text-center">{review.text}</p>
              <div className="card-actions justify-center">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 ${
                      index < review.rate
                        ? "fill-orange-500"
                        : "fill-transparent"
                    }  stroke-orange-500 `}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
