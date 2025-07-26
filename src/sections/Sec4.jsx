import React from "react";
import CoffeeFeaturesCard from "../components/CoffeeFeaturesCard";
import Button from "../components/Button";

function Sec4() {
  const coffeeFeatures = [
    {
      title: "Supreme Beans",
      description: "Beans that provides great taste",
      icon: "/assets/coffee-beans 1.png", // corrected path
    },
    {
      title: "High Quality",
      description: "We provide the highest quality",
      icon: "/assets/badge 1.png",
    },
    {
      title: "Extraordinary",
      description: "Coffee like you have never tasted",
      icon: "/assets/coffee-cup 1.png",
    },
    {
      title: "Affordable Price",
      description: "Our Coffee prices are easy to afford",
      icon: "/assets/best-price 1.png",
    },
  ];

  return (
    <section className="bg-white w-full min-h-screen px-6 md:px-16 py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="textColor text-3xl sm:text-4xl md:text-5xl font-bold py-3">
          Why are we different?
        </h1>
        <p className="secColor text-base sm:text-lg md:text-base text-gray-700">
          We don't just make your coffee, we make your day!
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
        {coffeeFeatures.map((item, index) => (
          <div key={index} className="flex justify-center">
          <CoffeeFeaturesCard
            key={index}
            icon={item.icon}
            description={item.description}
            title={item.title}
          />
          </div>
        ))}
      </div>

      
      <div className="text-center pt-10 px-4">
        <p className="secColor text-base sm:text-lg md:text-xl ">
          Great ideas start with great coffee. Let’s help you achieve that
        </p>
        <h1 className="textColor text-2xl sm:text-3xl md:text-4xl mt-2 mb-4 font-semibold">
          Get started today.
        </h1>
        <Button text="Join Us" />
      </div>
    </section>
  );
}

export default Sec4;
