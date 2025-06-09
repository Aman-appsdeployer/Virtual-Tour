import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import hawaii__img from "../../assets/images/featued-img-1.jpg";
import egypt__img from "../../assets/images/featued-img-2.jpg";
import india__img from "../../assets/images/featued-img-3.jpg";

const locations = [
  {
    name: "Varanasi",
    desc: "Where time flows like the Ganges",
    discount: 35,
    rate: 5,
    image: hawaii__img,
  },
  {
    name: "Ayodhya",
    desc: "A divine journey to the birthplace of Lord Rama...",
    discount: null,
    rate: 4,
    image: egypt__img,
  },
  {
    name: "India",
    desc: "Experience the heartbeat of a billion dreams...",
    discount: 45,
    rate: 3,
    image: india__img,
  },
];

const FeaturedLocations = ({ setSectionInView }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (inView) setSectionInView("feature");
  }, [inView]);

  return (
    <section ref={ref} className="bg-base-200 py-16" id="feature">
      <h1 className="uppercase text-center font-bold text-4xl pb-14 tracking-wide">
        <span className="text-accent text-5xl">F</span>eatured{" "}
        <span className="text-accent text-5xl">L</span>ocations
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-12">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden"
          >
            <div
              className="relative cursor-pointer"
              onClick={() => setModalImage(loc.image)}
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-52 object-cover"
              />
              {loc.discount && (
                <span className="badge badge-error absolute top-3 left-3 text-xs font-bold text-white px-4 py-1 shadow-md">
                  {loc.discount}% OFF
                </span>
              )}
            </div>

            <div className="card-body text-center px-5 py-4">
              <h2 className="card-title text-accent text-xl lg:text-2xl">
                {loc.name}
              </h2>
              <p className="text-sm text-gray-600 py-2">{loc.desc}</p>

              <div className="flex justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-5 h-5 ${
                      i < loc.rate
                        ? "fill-orange-500 stroke-orange-500"
                        : "fill-transparent stroke-orange-400"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ))}
              </div>

              <div className="card-actions mt-4 justify-center">
                <button className="btn btn-accent text-white px-6 hover:scale-105 duration-200">
                  Check Out!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative max-w-3xl mx-auto">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Full Size"
              className="rounded-lg shadow-2xl max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedLocations;






// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import hawaii__img from "../../assets/images/featued-img-1.jpg";
// import egypt__img from "../../assets/images/featued-img-2.jpg";
// import india__img from "../../assets/images/featued-img-3.jpg";

// const locations = [
//   {
//     name: "Varanasi",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
//     discount: 35,
//     rate: 5,
//     image: hawaii__img,
//   },
//   {
//     name: "Ayodhya",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
//     discount: null,
//     rate: 4,
//     image: egypt__img,
//   },
//   {
//     name: "india",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo. Porro error facilis obcaecati. Quisquam, placeat",
//     discount: 45,
//     rate: 3,
//     image: india__img,
//   },
// ];

// const FeaturedLocations = ({ setSectionInView }) => {
//   const { ref, inView } = useInView({
//     /* Optional options */
//     threshold: 0.2,
//   });

//   useEffect(() => {
//     if (inView) {
//       setSectionInView("feature");
//     }
//   }, [inView]);
//   return (
//     <section ref={ref} className="bg-base-200" id="feature">
//       <h1 className="uppercase text-center font-bold text-3xl pb-10">
//         <span className="text-accent">f</span>eatured{" "}
//         <span className="text-accent">l</span>ocations
//       </h1>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {locations.map((loc, index) => (
//           <div key={index} className="card card-compact bg-base-100 shadow-xl">
//             <figure className="max-h-40 lg:max-h-48 xl:max-h-52 h-full relative">
//               <img className="h-full w-full" src={loc.image} alt={loc.name} />
//               {loc.discount && (
//                 <span className="badge  badge-error px-3 absolute top-3 left-3 text-primary-content">
//                   {loc.discount}%
//                 </span>
//               )}
//             </figure>
//             <div className="card-body items-center text-center">
//               <h2 className="card-title text-accent lg:text-2xl ">
//                 {loc.name}
//               </h2>
//               <p>{loc.desc}</p>
//               <div className="flex">
//                 {[1, 2, 3, 4, 5, 6].map((star, index) => (
//                   <svg
//                     key={index}
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className={`w-4 h-4 ${
//                       index < loc.rate ? "fill-orange-500" : "fill-transparent"
//                     }  stroke-orange-500 `}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
//                     />
//                   </svg>
//                 ))}
//               </div>

//               <div className="card-actions mt-2 ">
//                 <button className="btn  btn-accent  text-primary-content">
//                   Check Out!
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedLocations;
