import styles from "./Products.module.css";
import ProductTypes from "./ProductTypes";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function Products() {
  return (
    <section className={`${styles.background}  mt-40 pb-20 pt-20 `}>
      <div className="font-inter pl-[10%] pr-[10%] md:pl-[18%] md:pr-[18%]">
        <div>
          <h1
            className={` ${styles.bg_gradient} text-base font-[500] p-4 pl-6 inline-block leading-3`}
          >
            Products
          </h1>
        </div>
      </div>
      <div className="mt-8 pl-[10%] pr-[10%] md:pl-[18%] md:pr-[18%]">
        <p className="text-3xl font-[350] leading-10 tracking-tight">
          <span className="font-[500]">Cutting-edge hardware, </span>offerings{" "}
          <br></br>
          helping cities optimize resources and <br></br> achieve smart
          development goals
        </p>
      </div>
      <div className="mt-4 pl-[10%] pr-[10%] md:pl-[18%] md:pr-[18%]">
        <ProductTypes
          gradient={true}
          text={"Centralized Control & Monitoring System"}
        />
        <ProductTypes text={"NEMA-Mounted VOLC 1160"} />
        <ProductTypes text={"Retrofit Street Light Controller VOLC 2160"} />
        <ProductTypes text={"Retrofit Street Light Controller VOLC 2180"} />
        <ProductTypes text={"Retrofit Street Light Controller VOLC 4180"} />
      </div>
      <div className="mt-10 flex  h-[60dvh] pl-[1%] pr-[1%] md:pl-[18%] md:pr-[18%]">
        <div className="relative bg-red-50 w-[50%] h-[100%]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/img/streetlight.jpg"
            alt="light"
          ></img>
          <div className="absolute right-0 bottom-0 cursor-pointer bg-gray-200 flex justify-center items-center w-10 h-7">
            <MdArrowBackIos />
          </div>
        </div>
        <div className="relative items-center bg-white h-[100%] w-[50%] pl-6 pt-[5%]">
          <div className="w-[100%]">
            <h5 className="text-sm text-gray-600">Product 1/5</h5>
            <p className="text-xl font-[500]">
              Centralized Control & <br></br> Monitoring System
            </p>
            <p className="text-xs text-gray-600 w-[70%]">
              Designed indigenously for street lighting projects, the CCMS
              offers a complete feeder panel for a group of 30-50 street lights.
            </p>
          </div>
          <div className="text-blue-600 mb-8 mt-10 flex gap-4 items-center">
            <h4>Know More</h4>
            <img className="cursor-pointer" src="/img/icon.svg"></img>
          </div>
          <div className="absolute left-0 bottom-0 text-blue-700 bg-gray-100 flex justify-center cursor-pointer items-center w-10 h-7">
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
