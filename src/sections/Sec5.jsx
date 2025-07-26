
import Button from "../components/Button";

const img = './../assets/Group_61.png'
function Sec5() {
  return (
    <section
      id="sec5-container"
      className="relative  w-full h-[45vh] sm:h-[60vh] lg:h-[100vh] px-6  md:px-16 flex  "
    >
      <div className="w-full h-full text-white z-1 flex flex-col justify-center  gap-4 sm:gap-8">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold">
            Get a chance to have an <br/> Amazing morning
        </h1>
        <p className="text-[.8rem] sm:text-base md:text-lg">
          We are giving you are one time opportunity to <br/> exprince a better life with coffee.
        </p>
        <Button text="Learn More" />
      </div>
      <div className="h-auto w-[50%] sm:w-auto sm:h-[100%] absolute right-0 bottom-0">
        <img className="w-full h-full " src={img} alt="coffee-cup" />
      </div>
    </section>
  );
}

export default Sec5;
