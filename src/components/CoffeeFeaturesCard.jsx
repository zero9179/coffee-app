import React from "react";

function CoffeeFeaturesCard({ icon, description, title }) {
  return (
    <div className="bg-orange-100 border-1 border-amber-500 h-80 w-80 flex flex-col items-center">
      <div className=" w-full h-[50%] flex justify-center items-center">
        <img className=" object-contain" src={icon} alt={title} />
      </div>
      <div className="text-center">
        <h1 className="textColor text-3xl font-bold my-3">{title}</h1>
        <p className="secColor px-8 text-xl">{description}</p>
      </div>
    </div>
  );
}

export default CoffeeFeaturesCard;
