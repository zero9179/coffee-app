
import Button from "../components/Button";

function Sec5() {
  return (
    <section
      id="sec5-container"
      className=" w-screen  pl-16 flex items-center justify-between "
    >
      <div className="w-[60%] text-white">
        <h1 className="text-5xl font-semibold">
            Get a chance to have an <br/> Amazing morning
        </h1>
        <p className="my-8 text-lg">
          We are giving you are one time opportunity to <br/> exprince a better life with coffee.
        </p>
        <Button text="Learn More" />
      </div>
      <div className=" ">
        <img className="w-full h-full obj-fit" src="public/assets/Group 61.png" alt="coffee-cup" />
      </div>
    </section>
  );
}

export default Sec5;
