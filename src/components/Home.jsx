import React from "react";
import { BsArrowRight } from "react-icons/bs";
import png1 from "../images/Sajek.png";
import png2 from "../images/Sreemongol.png";
import png3 from "../images/sundorbon.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto flex  md:mt-0 gap-10 justify-center items-center py-10">
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

      <div className="py-6">
        <div className="w-full max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="carousel w-full">
            {/* Slide 1 */}
            <div
              id="item1"
              className="carousel-item w-full flex justify-center gap-6"
            >
              <Link className="relative w-80 overflow-hidden rounded-3xl shadow-lg hover:scale-102 transition-transform duration-300">
                <img src={png1} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end justify-center p-4 bg-black/35 rounded-3xl hover:border-3 border-yellow-400">
                  <h1 className="text-white text-xl font-bold text-center">
                    COX’S BAZAR
                  </h1>
                </div>
              </Link>

              <Link className="relative w-80 overflow-hidden rounded-3xl shadow-lg hover:scale-102 transition-transform duration-300">
                <img src={png2} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end justify-center p-4 bg-black/35 rounded-3xl hover:border-3 border-yellow-400">
                  <h1 className="text-white text-xl font-bold text-center">
                    SREEMANGAL
                  </h1>
                </div>
              </Link>

              <Link className="relative w-80 overflow-hidden rounded-3xl shadow-lg hover:scale-102 transition-transform duration-300">
                <img src={png3} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end justify-center p-4 bg-black/35 rounded-3xl hover:border-3 border-yellow-400">
                  <h1 className="text-white text-xl font-bold text-center">
                    SUNDARBANSR
                  </h1>
                </div>
              </Link>
            </div>

            {/* Slide 2 */}
            <div
              id="item2"
              className="carousel-item w-full flex justify-center gap-6"
            >
              <div className="relative w-80 overflow-hidden rounded-3xl shadow-lg hover:scale-103 transition-transform duration-300">
                <img src={png1} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end justify-center p-4 bg-black/35 rounded-3xl hover:border-3 border-yellow-400">
                  <h1 className="text-white text-xl font-bold text-center">
                    COX’S BAZAR
                  </h1>
                </div>
              </div>

              <div className="relative w-80 overflow-hidden rounded-3xl shadow-lg hover:scale-103 transition-transform duration-300">
                <img src={png2} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end justify-center p-4 bg-black/35 rounded-3xl hover:border-3 border-yellow-400">
                  <h1 className="text-white text-xl font-bold text-center">
                    SREEMANGAL
                  </h1>
                </div>
              </div>

              <div className="relative w-80 overflow-hidden rounded-3xl shadow-lg hover:scale-103 transition-transform duration-300">
                <img src={png3} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end justify-center p-4 bg-black/35 rounded-3xl hover:border-3 border-yellow-400">
                  <h1 className="text-white text-xl font-bold text-center">
                    SUNDARBANSR
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 mt-4">
            <a
              href="#item1"
              className="btn btn-xs btn-outline bg-white text-black"
            >
              <AiOutlineLeft />
            </a>
            <a
              href="#item2"
              className="btn btn-xs btn-outline bg-white text-black"
            >
              <AiOutlineRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
