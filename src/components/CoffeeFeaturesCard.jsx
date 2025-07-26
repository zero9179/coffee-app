import React from "react";

function CoffeeFeaturesCard({ icon, description, title }) {
  return (
    <div
      className="bg-orange-100 border-1 border-amber-500  flex flex-col items-center
        h-56 w-56
        sm:h-64 sm:w-80
        
    "
    >
      <div className=" w-full h-[50%] flex justify-center items-center">
        <img className=" object-contain" src={icon} alt={title} />
      </div>
      <div className="text-center w-full h-[50%] flex flex-col items-center">
        <h1 className="textColor text-sm sm:text-2xl lg:text-xl font-bold my-3">{title}</h1>
        <p className="secColor text-xs px-4 sm:text-sm text-center">{description}</p>
      </div>
    </div>
  );
}

export default CoffeeFeaturesCard;
