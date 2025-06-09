import React, { useEffect } from "react";
import home_video from "../../assets/images/home-video.mp4";
import { useInView } from "react-intersection-observer";

export const Home = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setSectionInView("home");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full min-h-screen pt-20 pb-10 relative flex flex-col items-center lg:flex-row lg:justify-center gap-10 "
    >
      <video
        autoPlay
        loop
        muted
        id="HomeVideo"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={home_video} type="video/mp4" />
      </video>
      <div>
        <h2 className="text-4xl lg:text-5xl font-bold uppercase text-center lg:text-left text-primary-content ">
          explore new places, <br />
          adventure <br /> awaits.
        </h2>
        <p className="text-center lg:text-lg xl:text-2xl lg:pl-5 lg:text-left lg:border-l-2 xl:border-l-4 lg:border-l-base-300 text-primary-content mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
          necessitatibus sunt atque consequuntur quam veniam magnam consectetur,
          odio velit alias!
        </p>
      </div>

      <div className="w-full max-w-md">
        <form className="rounded-md bg-base-100 shadow-xl p-5 " action="">
          <h3 className="text-xl font-bold uppercase text-center mb-5">
            search your destination
          </h3>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-accent uppercase">location</span>
            </label>
            <input
              type="text"
              placeholder="Place You Want To Visit"
              className="input input-accent input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-accent uppercase">
                guest members
              </span>
            </label>
            <input
              type="number"
              placeholder="Number of people"
              className="input input-accent input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-accent uppercase">arrival</span>
            </label>
            <input
              type="date"
              //   placeholder="Place You Want To Visit"
              className="input input-accent input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-accent uppercase">leaving</span>
            </label>
            <input
              type="date"
              //   placeholder="Place You Want To Visit"
              className="input input-accent input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn btn-accent btn-block mt-5 text-primary-content"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
