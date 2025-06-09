import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import g_image_1 from "../../assets/images/gallery-img-1.jpg";
import g_image_2 from "../../assets/images/gallery-img-2.jpg";
import g_image_3 from "../../assets/images/gallery-img-3.jpg";
import g_image_4 from "../../assets/images/gallery-img-4.jpg";
import g_image_5 from "../../assets/images/gallery-img-5.jpg";
import g_image_6 from "../../assets/images/gallery-img-6.jpg";

const images = [
  g_image_1,
  g_image_2,
  g_image_3,
  g_image_4,
  g_image_5,
  g_image_6,
];

export const Gallery = ({ setSectionInView }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setSectionInView("gallery");
    }
  }, [inView]);

  return (
    <section ref={ref} id="gallery" className="py-12 px-4 bg-base-200">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">g</span>allery
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden cursor-pointer group"
          >
            <img
              className="h-full w-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
              src={img}
              alt={`gallery_image_${index}`}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
              {/* Heart icon in bottom-left */}
              <div className="absolute bottom-4 left-4 z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 fill-white stroke-white hover:fill-accent hover:stroke-accent transition-colors duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

