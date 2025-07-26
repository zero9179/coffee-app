import Button from "./Button";

function CoffeeCard({ img, title, description, price }) {
  return (
    <div className="bg-orange-100 border border-amber-500 h-80 w-64 flex flex-col items-center relative
      sm:w-56 sm:h-72
      md:w-64 md:h-80
      ">
      <div className="bg-red-500 w-full h-[60%]">
        <img className="w-full h-full object-cover" src={img} alt={title} />
      </div>
      <div className="h-[40%] text-center px-2 flex flex-col items-center justify-center gap-1 pb-2">
        <h1 className="textColor text-xl font-bold ">{title}</h1>
        <p className="secColor text-base">{description}</p>
        <p className="textColor font-semibold text-lg ">${price}</p>
      </div>
      <div className="absolute bottom-0 transform translate-y-1/2">
        <Button text="Order Now" />
      </div>
    </div>
  );
}

export default CoffeeCard;
