import React from "react";
import Button from "../components/Button";

function Sec1() {
  return (
    <section
      id="sec1-container"
      className="w-full h-[60vh] md:h-[100%] lg:min-h-screen px-6 md:px-16 py-10 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start"
    >
      <div className="w-full md:w-1/2 text-white mt-6 md:mt-6 text-center md:text-left">
        <p className="text-xs sm:text-sm md:text-base  lg:mt-8">
          We've got your morning covered with
        </p>

        <h1
          id="coffe-title"
          className="mt-0 mb-0 text-[5rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-light my-4"
        >
          Coffee
        </h1>

        <p className="mb-6 text-xs sm:text-sm md:text-[1rem] lg:w-[70%]">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>

        <Button text="Order Now" />
      </div>
    </section>
  );
}

export default Sec1;
