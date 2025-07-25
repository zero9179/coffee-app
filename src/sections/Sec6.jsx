import { FaQuoteLeft } from "react-icons/fa6";

function Sec6() {
  return (
    <section className="bg-white w-screen min-h-screen px-16 pt-6 pb-30 relative">
      <img className="absolute right-0 top-0 z-1" src="public/assets/coffee_blast (1).png" alt="right" />
      <div className="text-center">
        <h1 className="textColor text-5xl py-3 font-bold">
          Our coffee perfection feedback
        </h1>
        <p className="secColor text-xl mb-6">
          our customers has amazing to say about us
        </p>
      </div>
      <div className="flex relative flex-col items-center justify-center w-full">
        <div className="w-[70%] h-fit border-1 border-amber-500 text-center px-16">
          <div className="">
            <FaQuoteLeft size={100} color="#5b3620"/>
          </div>

          <p className="secColor text-center text-xl mt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta a
            suscipit aperiam, maiores debitis id assumenda at unde dolore vel
            ullam accusantium, porro quia cupiditate voluptates, totam similique
            recusandae? Iusto, quasi rem ea consequuntur vero alias eveniet
            officiis omnis architecto qui perspiciatis dolorem labore pariatur
            tempore assumenda ad eaque doloremque?
          </p>
          <h1 className="textColor text-3xl mt-10">Jonny Thomas</h1>
          <p className="secColor mb-20">Project Manager</p>
        </div>
        <div className="absolute -bottom-20">
          <img src="public/assets/Rectangle 9 (1).png" alt="profile" />
        </div>
      </div>
      <img className="absolute left-0 bottom-0 rotate-x-180" src="public/assets/coffee_blast.png" alt="" />
    </section>
  );
}

export default Sec6;
