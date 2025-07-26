import React from "react";

function Footer() {
  return (
    <footer className=" w-full">
      <div id="footer-top-container" className="text-center md:py-16 p-6 md:px-16 text-white relative">
        <h1 className="text-xl md:text-5xl py-3 font-bold">
          Subscribe to get the Latest News
        </h1>
        <p className="text-[0.6rem] md:text-base mb-6">
          Don't miss out on our latest news, updates, tips and spicial offers
        </p>
        <div className="w-[150px] md:w-[500px] md:h-16 border-1 rounded-md overflow-hidden  flex mx-auto bg-amber-800 ">
          <input
            type="text"
            placeholder="Enter your mail"
            className="bg-white px-2 pb-2 w-[70%] md:w-[80%] outline-none text-black placeholder-black placeholder:text-[0.5rem]"
          />
          <button className="bg-yellow-300  font-semibold w-[30%] md:w-[20%] text-[0.5rem] md;text-base">
            Suscribe
          </button>
        </div>
        {/* <img className="absolute left-0 -bottom-32" src="public/assets/pngwing 1.png" alt="" /> */}
        {/* <img className="absolute right-0 -bottom-32" src="public/assets/pngwing 2.png" alt="" /> */}

      </div>

{/* ====================foooter-bottom======================== */}
      <div id="footer-bottom-container" className="w-full bg-amber-900 sm:py-16 sm:pt-40 p-6 md:px-16">
        <section className=" p-2 grid grid-cols-3 sm:grid-cols-5 gap-6 text-white bg-[#281b1b21]">
          <div className=" col-span-3 sm:col-span-2">
            <h1 style={{ fontFamily: "Clicker Script, cursive" }} className="text-2xl md:text-5xl mb:mb-8">Bean Scene</h1>
            <p className="mb:mb-6 text-xs mb:text-base [hyphens:auto] break-words sm:w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              culpa itaque debitis neque repellat ducimus beatae voluptas
              blanditiis, eius quos ullam dolores laudantium doloribus
              dignissimos!
            </p>
            <div>icons</div>
          </div>

          <div className="border-r border-white">
            <h1 className="text-sm md:text-2xl font-semibold md:mb-9">About</h1>
            <div className="text-[.5rem] md:text-sm font-semibold flex flex-col md:gap-3">
              <p>Menu</p>
              <p>Features</p>
              <p>News & Blogs</p>
              <p>Help & Support</p>
            </div>
          </div>

          <div className="border-r border-white">
            <h1 className="text-sm md:text-2xl font-semibold md:mb-9">Company</h1>
            <div className="text-[.5rem] md:text-sm font-semibold flex flex-col md:gap-3">
                <p>How we work</p>
                <p>Terms of services</p>
                <p>Pricing</p>
                <p>FAQ</p>
            </div>
          </div>
          <div>
            <h1 className="text-sm md:text-2xl font-semibold md:mb-9">Contact US</h1>
            <div className="text-[.5rem] md:text-sm font-semibold flex flex-col  md:gap-3">
                <p>
                    Lorem ipsum dolor sit amet consectetu
                </p>
                <p>+91 0000000000</p>
                <p>beanscene@mail.com</p>
                <p>www.beanscene.com</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
