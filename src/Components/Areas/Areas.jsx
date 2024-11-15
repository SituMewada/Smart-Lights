function Areas() {
  return (
    <section className="font-inter  pl-[10%] pr-[10%] overflow-hidden md:pl-[18%] md:pr-[18%]">
      <div className=" mb-4 mt-32">
        <div className="flex justify-center">
          <p className="text-3xl text-center font-[350] w-[90%] leading-[2rem] tracking-wide md:text-4xl md:leading-[3rem] md:[75%]">
            The platform assists city managers on multiple fronts
          </p>
        </div>
        <div className="">
          <div className="flex mt-20  ">
            <div className="w-1/2 h-52 border-r-[1.5px] border-b-[1.5px] border-gray-300">
              <div>
                <img className="size-14" src="/img/lines.svg"></img>
                <p className="text-xl w-[90%] mt-4 md:text-2xl ms:w-[60%]">
                  Saves on power consumption & related costs
                </p>
              </div>
            </div>
            <div className="w-1/2 h-52  border-b-[1.5px] border-gray-300">
              <div className="flex flex-col items-end h-[80%] justify-end mb-10">
                <div className="w-[60%]">
                  <img className="size-14" src="/img/lines.svg"></img>
                </div>
                <p className="text-xl w-[60%] mt-4 md:text-2xl">
                  Lowers downtimes
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[30%] h-60 border-r-[1.5px] border-b-[1.5px] border-gray-300 md:w-[20%]">
              <div className="flex flex-col justify-end h-[90%]">
                <img className="size-14" src="/img/lines.svg"></img>
                <p className="text-xl  mt-4 md:text-2xl">
                  Detects power thefts.
                </p>
              </div>
            </div>
            <div className="w-[70%] h-60  border-b-[1.5px] border-gray-300 md:w-[80%]">
              <div className="flex flex-col items-end justify-end h-[90%]">
                <div className="w-[50%]">
                  <img className="size-14" src="/img/lines.svg"></img>
                </div>
                <p className="text-xl w-[80%] mt-4 md:text-2xl md:w-[50%]">
                  Ensures smart monitoring and control of the street light
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[70%] h-60 border-r-[1.5px] border-b-[1.5px] border-gray-300">
              <div className="flex flex-col justify-end h-[90%]">
                <img className="size-14" src="/img/lines.svg"></img>
                <p className="text-xl  mt-4 w-[95%] md:text-2xl md:w-[60%]">
                  Ensures real-time actionable analytics on power failures, lamp
                  malfunctions, voltage failures, etc.
                </p>
              </div>
            </div>
            <div className="w-[30%] h-60  border-b-[1.5px] border-gray-300">
              <div className="flex flex-col items-end justify-end h-[90%]">
                <div className="w-[80%] md:w-[50%]">
                  <img className="size-14" src="/img/lines.svg"></img>
                </div>
                <p className="text-xl w-[90%] mt-4 md:text-2xl md:w-[50%]">
                  Ensures security in the neighborhood
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[70%] h-20 border-r-[1.5px]  border-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Areas;
