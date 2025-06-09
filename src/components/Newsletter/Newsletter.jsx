import React from "react";

export const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <h1 className="uppercase text-center font-bold text-3xl xl:text-4xl pb-5 text-primary-content drop-shadow-md	">
        sign up 25% discount
      </h1>
      <p className="text-primary-content text-center lg:text-xl max-w-lg mx-auto pb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
        provident saepe vel pariatur incidunt libero quo nisi ratione. Ea,
        corporis.
      </p>

      <div className="flex items-center justify-center">
        <form
          action=""
          className="flex flex-col lg:flex-row lg:justify-center  items-center w-full"
        >
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input input-bordered input-accent glass w-full lg:max-w-lg text-primary-content"
          />
          <button className="btn btn-accent mt-5 lg:mt-0 text-primary-content  ">
            Sing Up
          </button>
        </form>
      </div>
    </section>
  );
};
