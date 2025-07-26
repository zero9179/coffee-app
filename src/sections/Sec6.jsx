import { FaQuoteLeft } from "react-icons/fa6";

function Sec6() {
  return (
    <section className="bg-white w-full h-fit px-16 pt-10 pb-20 relative">
      {/* <img className="absolute right-0 top-0 z-1" src="public/assets/coffee_blast (1).png" alt="right" /> */}
      <div className="text-center mb-5">
        <h1 className="textColor text-[1.3rem] sm:text-4xl md:text-5xl font-bold mb-1">
          Our coffee perfection feedback
        </h1>
        <p className="secColor text-[.6rem] sm:text-lg md:text-base">
          our customers has amazing to say about us
        </p>
      </div>
      <div className="flex relative flex-col items-center justify-center w-full">
        <div className="w-full sm:w-[70%] h-fit border-1 border-amber-500 text-center p-1 sm:px-4 md:px-16">
          <div className="size-10 sm:size-15 md:size-20">
            <FaQuoteLeft size='full' color="#5b3620"/>
          </div>

          <p className="secColor text-xs [hyphens:auto] break-words md:text-lg  lg:text-xl my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta a
            suscipit aperiam, maiores debitis id assumenda at unde dolore vel
            ullam accusantium, porro quia cupiditate voluptates, totam similique
            recusandae? Iusto, quasi rem ea consequuntur vero alias eveniet
            officiis omnis architecto qui perspiciatis dolorem labore pariatur
            tempore assumenda ad eaque doloremque?
          </p>
          <h1 className="textColor text-base sm:text-3xl">Jonny Thomas</h1>
          <p className="secColor mb-10 sm:mb-20">Project Manager</p>
        </div>
        <div className="size-20 sm:size-30 md:size-fit absolute bottom-0 translate-y-1/2">
          <img className="size-full object-cover" src="./../assets/profile.png " alt="profile" />
        </div>
      </div>
      {/* <img className="absolute left-0 bottom-0 rotate-x-180" src="public/assets/coffee_blast.png" alt="" /> */}
    </section>
  );
}

export default Sec6;
