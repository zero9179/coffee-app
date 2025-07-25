import Button from "./Button";

function CoffeeCard({ img, title, description, price }) {
  return (
    <div className="bg-orange-100 border-1 border-amber-500 h-96 w-72 flex flex-col items-center relative">
      <div className="bg-red-500 w-full h-[60%]">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="text-center">
        <h1 className="textColor text-2xl font-bold my-3">{title}</h1>
        <p className="secColor text-xl">{description}</p>
        <p className="textColor font-semibold text-2xl ">${price}</p>
      </div>
      <div className="absolute bottom-[-20px]">
        <Button text="Order Now" />
      </div>
    </div>
  );
}

export default CoffeeCard;
