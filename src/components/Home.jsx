import React from "react";
import { BsArrowRight } from "react-icons/bs";
import png1 from "../images/Sajek.png";
import png2 from "../images/Sreemongol.png";
import png3 from "../images/sundorbon.png";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto flex-col md:flex md:mt-0 gap-10 justify-center items-center py-10">
      <div>
        <h1 className="text-6xl font-bold text-gray-200">Cox's bazar</h1>
        <p className="text-md text-gray-300 py-6">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <button className="btn btn-warning py-1 px-7">
          Booking <BsArrowRight className="mt-1 font-bold" />
        </button>
      </div>

      <div className=" md:mt-0 mt-10">
        <div className="w-full">
          {/* Carousel */}
          <div className="carousel w-full">
            {/* Slide 1 */}
            <div
              id="item1"
              className="carousel-item w-full flex gap-8 justify-center "
            >
              <div className=" relative">
                <img src={png1} />
                <div className=" absolute  pt-95 font-bold  text-white  text-3xl inset-0 bg-black/35 rounded-3xl px-3">
                  <h1>COX’S BAZAR</h1>
                </div>
              </div>
              <div className=" relative">
                <img src={png2} />
                <div className=" absolute  pt-95 font-bold  text-white  text-3xl inset-0 bg-black/35 rounded-3xl px-3">
                  <h1>SREEMANGAL</h1>
                </div>
              </div>
              <div className=" relative">
                <img src={png3} />
                <div className=" absolute  pt-95 font-bold  text-white  text-3xl inset-0 bg-black/35 rounded-3xl px-3">
                  <h1>SUNDARBANSR</h1>
                </div>
              </div>

            </div>

            {/* Slide 2 */}
            <div
              id="item2"
              className="carousel-item w-full flex justify-center gap-4"
            >
               <div className=" relative">
                <img src={png1} />
                <div className=" absolute  pt-95 font-bold  text-white  text-3xl inset-0 bg-black/35 rounded-3xl px-3">
                  <h1>COX’S BAZAR</h1>
                </div>
              </div>
              <div className=" relative">
                <img src={png2} />
                <div className=" absolute  pt-95 font-bold  text-white  text-3xl inset-0 bg-black/35 rounded-3xl px-3">
                  <h1>SREEMANGAL</h1>
                </div>
              </div>
              <div className=" relative">
                <img src={png3} />
                <div className=" absolute  pt-95 font-bold  text-white  text-3xl inset-0 bg-black/35 rounded-3xl px-3">
                  <h1>SUNDARBANSR</h1>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
