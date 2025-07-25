import React from "react";

function Footer() {
  return (
    <footer className=" w-full">
      <div id="footer-top-container" className="text-center py-16 px-16 text-white relative">
        <h1 className="text-5xl py-3 font-bold">
          Subscribe to get the Latest News
        </h1>
        <p className=" mb-6">
          Don't miss out on our latest news, updates, tips and spicial offers
        </p>
        <div className="w-[500px] border-1 rounded-md overflow-hidden h-16 flex mx-auto bg-amber-800 ">
          <input
            type="text"
            placeholder="Enter your mail"
            className="bg-white px-2 w-[80%] outline-none text-black placeholder-black"
          />
          <button className="bg-yellow-300  font-semibold w-[20%]">
            Suscribe
          </button>
        </div>
        <img className="absolute left-0 -bottom-32" src="public/assets/pngwing 1.png" alt="" />
        <img className="absolute right-0 -bottom-32" src="public/assets/pngwing 2.png" alt="" />

      </div>

{/* ====================foooter-bottom======================== */}
      <div id="footer-bottom-container" className="w-full bg-amber-900 py-16 pt-40 px-16">
        <section className=" p-2 grid grid-cols-5 gap-6 text-white bg-[#281b1b21]">
          <div className="col-span-2">
            <h1 style={{ fontFamily: "Clicker Script, cursive" }} className="text-5xl mb-8">Bean Scene</h1>
            <p className="mb-6 text-lg w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              culpa itaque debitis neque repellat ducimus beatae voluptas
              blanditiis, eius quos ullam dolores laudantium doloribus
              dignissimos!
            </p>
            <div>icons</div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-8">About</h1>
            <div className="text-sm font-semibold flex flex-col gap-3">
              <p>Menu</p>
              <p>Features</p>
              <p>News & Blogs</p>
              <p>Help & Support</p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-8">Company</h1>
            <div className="text-sm font-semibold flex flex-col gap-3">
                <p>How we work</p>
                <p>Terms of services</p>
                <p>Pricing</p>
                <p>FAQ</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-8">Contact US</h1>
            <div className="text-sm font-semibold flex flex-col gap-3">
                <p>
                    Lorem ipsum dolor sit amet consectetu
                </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
