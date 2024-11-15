import styles from "./Ecosystem.module.css";
function Ecosystem() {
  return (
    <section className="pl-[8%] pr-[8%] md:pl-[18%] md:pr-[18%] mt-20 mb-20 overflow-hidden">
      <div className="font-inter">
        <div>
          <h1
            className={` ${styles.bg_gradient} text-base font-[500] p-4 pl-6 inline-block leading-3`}
          >
            Ecosystem
          </h1>
        </div>
        <div className="mt-3">
          <p className="text-[2rem] font-[350s] leading-[3rem] tracking-wide">
            How does a smart street <br></br>light ecosystem work?
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-center items-center">
            <div className=" relative flex flex-col items-center ">
              <img
                className="object-contain size-48"
                src="/img/streetLightControler.svg"
                alt=""
              ></img>
              <div className="absolute -bottom-10 text-center">
                <h5 className="text-[10px]">Street light Controller</h5>
                <p className="text-[10px] text-center w-40 text-black/50">
                  Activates/deactivates in response to motion/light sensing and
                  controls the brightness of the street lamp.
                </p>
              </div>
            </div>
            <div className="w-[20%]  border-2 border-dashed border-b-0 border-l-0 border-r-0"></div>
            <div className="relative flex justify-center items-center">
              <img
                className="object-contain size-28"
                src="/img/gateway.svg"
                alt=""
              ></img>
              <div className="absolute -bottom-36  md:-bottom-24 text-center">
                <h5 className="text-[10px]">Gateway</h5>
                <p className="text-[10px] text-center w-40 text-black/50">
                  Employed for interfacing between a Controller and the Lighting
                  Management Software.
                </p>
              </div>
            </div>
            <div className="w-[20%]  border-2 border-dashed border-b-0 border-l-0 border-r-0"></div>
            <div className="relative flex justify-center items-center">
              <img
                className="object-contain size-28"
                src="/img/cloud_based_management.svg"
                alt=""
              ></img>
              <div className="absolute -bottom-20 right-0 text-center">
                <h5 className="text-[10px]">
                  Cloud-based <br></br>Management System
                </h5>
                <p className="text-[10px] text-center w-40 text-black/50">
                  Collects information from multiple gateways.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative flex justify-center items-center ">
          <img className="size-80" src="/img/userEvalution.svg"></img>
          <div className="absolute bottom-0 left-0 md:bottom-0 md:left-[27%] text-center">
            <h5 className="text-[10px]">User</h5>
            <p className="text-[10px] text-center w-40 text-black/50">
              Data from the cloud is used to monitor and control street lights
              by the System Managers.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 md:bottom-0 md:right-[27%] text-center">
            <h5 className="text-[10px]">Evalution</h5>
            <p className="text-[10px] text-center w-40 text-black/50">
              Gathered insights are used to evaluate the performance of the
              lighting systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
