import React, { useEffect } from "react";
import about__img from "../../assets/images/about-img.png";
import { useInView } from "react-intersection-observer";
export const About = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setSectionInView("about");
    }
  }, [inView]);
  return (
    <section ref={ref} id="about">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">a</span>bout{" "}
        <span className="text-accent">u</span>s
      </h1>

      <div className="flex flex-col lg:flex-row  gap-10  ">
        {/* About Image */}
        <div>
          <img
            className="xl:h-[65vh] xl:w-[70vw]"
            src={about__img}
            alt="about-img"
          />
        </div>
        {/* About Content */}
        <div className="text-center xl:text-left  flex flex-col  justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold uppercase text-center lg:text-left text-accent ">
            why choose us?
          </h2>
          <p className="my-3 lg:text-left lg:text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam
            aut tenetur quaerat omnis perferendis nesciunt quidem odit quod! Ex
            excepturi temporibus iste assumenda, odio magnam laudantium minus
            asperiores distinctio!
          </p>

          <p className="lg:text-left lg:text-lg ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
            itaque.
          </p>

          <div className="flex items-center justify-center mt-2">
            <button className="btn btn-outline btn-accent mr-2">
              Read More
            </button>
            <button className="btn btn-accent text-primary-content">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
