import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("contact");
    }
  }, [inView]);

  return (
    <section ref={ref} id="contact" className="px-4 py-10 bg-base-100">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">c</span>ontact{" "}
        <span className="text-accent">u</span>s
      </h1>

      <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
        {/* Embedded Map */}
        <div className="lg:col-span-2 flex items-center justify-center w-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4086818820533!2d51.39162221500038!3d35.68919778019201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e016839a8cf9f%3A0xfdbffb9074c40259!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1682511784945!5m2!1sen!2s"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md w-full max-w-4xl border-0 shadow-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center text-base leading-relaxed space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-accent mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.25c.621 0 1.125-.504 1.125-1.125S12.621 9 12 9s-1.125.504-1.125 1.125S11.379 11.25 12 11.25z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.125c0 7.125-7.5 11.625-7.5 11.625S4.5 17.25 4.5 10.125a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div>
              <p className="font-bold text-lg text-accent">Address</p>
              <p>Mmubai,</p>
              <p>Chembur Tiss</p>
              <p>400043</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-accent mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <div>
              <p className="font-bold text-lg text-accent">Email</p>
              <p>xyz@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-accent mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 4.5l4.875 1.625a1.125 1.125 0 01.75 1.074v2.251c0 .414-.24.79-.615.974l-1.732.866a16.5 16.5 0 007.428 7.428l.866-1.732a1.125 1.125 0 01.974-.615h2.25a1.125 1.125 0 011.074.75L19.5 21.75a1.125 1.125 0 01-1.074 1.5C10.125 23.25 1.5 14.625 1.5 4.5a1.125 1.125 0 011.5-1.074z"
              />
            </svg>
            <div>
              <p className="font-bold text-lg text-accent">Phone</p>
              <p>+98 123 456 789 0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




// import React, { useEffect } from "react";
// import mapImage from "../../assets/images/map.jpg";
// import { useInView } from "react-intersection-observer";
// const Contact = ({ setSectionInView }) => {
//   const { ref, inView } = useInView({
//     /* Optional options */
//     threshold: 0.2,
//   });
//   useEffect(() => {
//     if (inView) {
//       setSectionInView("contact");
//     }
//   }, [inView]);
//   return (
//     <section ref={ref} id="contact">
//       <h1 className="uppercase text-center font-bold text-3xl pb-20">
//         <span className="text-accent">c</span>ontact{" "}
//         <span className="text-accent">u</span>s
//       </h1>

//       <div className="grid gap-5 lg:gap-10 lg:grid-cols-3 ">
//         {/* map image */}
//         <div className="lg:col-span-3 flex items-center justify-center ">
//           <img
//             className="w-full max-w-2xl xl:max-w-4xl rounded-md"
//             src={mapImage}
//             alt="map-Image"
//           />
//         </div>
//         {/* website details */}
//         <div className="flex flex-col justify-center lg:col-span-1">
//           <ul>
//             <li className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6 fill-accent stroke-accent"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//                 />
//               </svg>
//               <span className="font-bold">address</span>
//             </li>
//             <li>Tehran ,</li>
//             <li>Daryan No , </li>
//             <li>400104</li>
//           </ul>
//           <ul className="my-5">
//             <li className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6 fill-accent stroke-white"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                 />
//               </svg>
//               <span className="font-bold">e-mail</span>
//             </li>
//             <li>xyz@gmail.com</li>
//           </ul>

//           <ul>
//             <li className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6 fill-accent stroke-white"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
//                 />
//               </svg>
//               <span className="font-bold">phone</span>
//             </li>
//             <li>+123 4567 890</li>
//           </ul>
//         </div>
//         {/* contact form */}
//         <div className="lg:col-span-2">
//           <h3 className="uppercase font-bold text-3xl pb-5 text-accent">
//             get in touch
//           </h3>
//           <form action="" className="grid grid-rows-3">
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="input input-bordered input-accent w-full  "
//               />
//               <input
//                 type="email"
//                 placeholder="E-mail"
//                 className="input input-bordered input-accent w-full    "
//               />
//             </div>

//             <textarea
//               className="textarea textarea-accent w-full"
//               placeholder="Message"
//             ></textarea>
//             <button
//               type="submit"
//               className="btn btn-outline btn-accent w-full mt-2"
//             >
//               Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
