import React from 'react';
import Button from '../components/Button';

function Sec2() {
  return (
    <section
      id="sec2-container"
      className="bg-white w-full min-h-[60%] lg:min-h-screen  px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-center "
    >
      {/* Left Text Content */}
      <div className="w-full md:w-[60%] mb-10 md:mb-0 text-center md:text-left">
        <h1 className="textColor text-2xl sm:text-4xl  lg:text-5xl font-semibold">
          Discover the best Coffee
        </h1>
        <p className="secColor my-8 text-xs  sm:text-base lg:text-md lg:w-[75%] text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
          nesciunt maiores tempora blanditiis maxime delectus alias voluptatum
          neque excepturi natus nisi corrupti voluptatibus commodi totam hic
          similique asperiores, assumenda esse? Assumenda accusantium mollitia
          numquam vitae!
        </p>
        <Button text="Learn More" />
      </div>

      {/* Right Image */}
      <div className="w-[40%] flex justify-center bg-red-500">
        <img
          src="/assets/coffee_bean_cup.png"
          alt="coffee-cup"
          className="md:w-full object-cover"
        />
      </div>

      {/* Background or Decorative Image */}
      {/* <img
        src="/assets/coffee_blast.png"
        alt="coffee blast"
        className="absolute left-0 -bottom-12 w-40 sm:w-52 md:w-64 lg:w-96 opacity-80"
      /> */}
    </section>
  );
}

export default Sec2;
