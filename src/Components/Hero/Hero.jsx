import { useEffect, useState } from "react";
import LoginBtn from "../Button/LoginBtn";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

function Hero() {
  const [onMobile, setOnMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 640) {
        setOnMobile(true);
      } else {
        setOnMobile(false);
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="overflow-hidden">
      <div className="bg-[url('/img/Hero_section.png')] bg-cover bg-center bg-no-repeat h-[100dvh] font-inter w-[100dvw]">
        <nav className="text-white flex items-center justify-between pl-[8%] pr-[8%] md:pl-[15%] md:pr-[15%] border-b-[0.05rem] border-gray-800 pb-4 pt-4 relative">
          <div>
            <img
              className="w-32"
              src="/logo/smart_lights_logo.svg"
              alt="logo"
            />
          </div>

          {!onMobile ? (
            <div className="flex items-center text-xs font-light justify-around w-[60%] md:w-[50%]">
              <div>
                <a href="#">Home</a>
              </div>
              <div>
                <a href="#">Products</a>
              </div>
              <div>
                <a href="#">Software Service</a>
              </div>
              <LoginBtn />
            </div>
          ) : (
            <div onClick={toggleMenu} className="cursor-pointer">
              {isOpen ? <RxCross2 size={24} /> : <CiMenuFries size={24} />}
            </div>
          )}

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } bg-white pt-4 pb-4 text-black absolute right-2 top-16 flex-col items-center text-xs font-light justify-around gap-4 w-40 rounded-lg shadow-lg`}
          >
            <div>Home</div>
            <div>Product</div>
            <div>Software Service</div>
            <div className="text-blue-500">Login</div>
          </div>
        </nav>

        <div className="flex flex-col justify-center items-center pl-[10%] pr-[10%] md:pl-[20%] md:pr-[20%] mt-16">
          <div>
            <h6 className="font-light tracking-widest text-white">
              Smart Light Solution
            </h6>
          </div>
          <div className="mt-3 text-white/60">
            <h1 className="text-2xl font-[300] text-center leading-[35px] tracking-wider md:text-4xl md:leading-[50px]">
              Bringing A New Perspective To Street Lights And The Cities Of
              Tomorrow.
            </h1>
          </div>
          <div className="mt-8">
            <LoginBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
