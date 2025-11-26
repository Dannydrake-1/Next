import "../components/Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="header">
          <h1>
            NEXT <br />
            THE FUTURE OF GAMING
          </h1>
        </div>
        <div
          id="about"
          className=" bg-[#0a0a0f] text-center mt-[600px] pb-[100px]"
        >
          <div className="">
            <p className="obi text-[28px] text-gray-300 py-4">
              STEP INTO WORLDS BEYOND IMAGINATION.
            </p>
          </div>

          <section className=" px-2 mx-2 pb-4 max-w-full  rounded-md  shadow-lg mt-[100px]">
            <h2 className="obi font-bold text-[#ee046d] text-[48px]">
              About NEXT
            </h2>
            <p className="text-gray-300 obi text-[20px]">
              NEXT is redefining the boundaries of reality. Our advanced VR
              technology merges imagination with innovation — allowing gamers to
              feel, see, and interact beyond the screen. Experience gaming like
              never before.
            </p>
          </section>

          <section className="mx-auto ">
            <h2 className=" obi mt-[100px]  text-[40px] font-semibold text-[#ee046d] text-center">
              Why Choose NEXT?
            </h2>

            <div className="obi grid gap-8 md:grid-cols-3 mt-[30px] px-2">
              <div className="rounded-xl border border-[#ee046d]/20 bg-[#1a1a1f] p-6 transition hover:border-[#ee046d]">
                <h3 className="text-xl font-semibold text-[#ee046d] text-[28px]">
                  Immersive Worlds
                </h3>
                <p className="mt-2 text-gray-300 text-[20px]">
                  Explore hyper-realistic environments powered by next-gen
                  graphics.
                </p>
              </div>

              <div className="rounded-xl border border-[#ee046d]/20 bg-[#1a1a1f] p-6 transition hover:border-[#ee046d]">
                <h3 className="text-xl font-semibold text-[#ee046d] text-[28px]">
                  Lightning Performance
                </h3>
                <p className="mt-2 text-gray-300 text-[20px]">
                  Experience smooth gameplay with ultra-low latency and
                  precision tracking.
                </p>
              </div>

              <div className="rounded-xl border border-[#ee046d]/20 bg-[#1a1a1f] p-6 transition hover:border-[#ee046d]">
                <h3 className="text-xl font-semibold text-[#ee046d]  text-[28px]">
                  Smart Design
                </h3>
                <p className="mt-2 text-gray-300 text-[20px]">
                  Ergonomic, lightweight, and built for hours of comfort.
                </p>
              </div>
            </div>
          </section>

          <section className="obi rounded-md border border-[#ee046d]/30 bg-[#1a1a1f] mx-2 shadow-lg mt-[150px] pb-5">
            <h2 className="text-[40px] font-semibold text-[#ee046d]">
              Ready to Enter the Future?
            </h2>
            <p className="text-gray-300 text-[28px]">
              Join thousands of gamers already exploring the NEXT dimension.
            </p>
            <Link to="/signup">
              <button className="mt-3 rounded-full bg-linear-to-r from-[#ee046d] to-[#ff2d8a] px-8 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105">
                Get Started
              </button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;
