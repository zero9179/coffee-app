import CoffeeCard from "../components/CoffeeCard";

function Sec3() {
  const coffeeMenu = [
    {
      title: "Cappuccino",
      description: "Coffee 50% | Milk 50%",
      price: 8.5,
      image: "/assets/Rectangle 7.png", // Updated relative path
    },
    {
      title: "Chai Latte",
      description: "Coffee 50% | Milk 50%",
      price: 8.5,
      image: "/assets/Rectangle 9.png",
    },
    {
      title: "Macchiato",
      description: "Coffee 50% | Milk 50%",
      price: 8.5,
      image: "/assets/Rectangle 11.png",
    },
    {
      title: "Expresso",
      description: "Coffee 50% | Milk 50%",
      price: 8.5,
      image: "/assets/Rectangle 13.png",
    },
  ];

  return (
    <section className="bg-white w-full min-h-screen p-6 md:px-16">
      {/* Section Heading */}
      <div className="text-center">
        <h1 className="textColor text-3xl sm:text-4xl md:text-5xl font-bold py-3">
          Enjoy a new blend Of Coffee style
        </h1>
        <p className="secColor text-base sm:text-lg md:text-base mb-10 mt-4 text-gray-700">
          Explore all flavours of coffee with us. There is always a new cup worth experiencing
        </p>
      </div>

      {/* Coffee Card Grid */}
      <div className="w-full">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16">
          {coffeeMenu.map((item, index) => (
            <div key={index} className="flex justify-center">
            <CoffeeCard
              key={index}
              img={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      {/* <img
        className="absolute right-0 bottom-0 w-40 sm:w-60 md:w-80 lg:w-96 opacity-80"
        src="/assets/coffee_blast (1).png"
        alt="coffee blast"
      /> */}
    </section>
  );
}

export default Sec3;
