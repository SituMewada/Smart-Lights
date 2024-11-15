function Footer() {
  return (
    <section className="font-inter">
      <div className="bg-[url(/img/Footer.png)] min-h-[50dvh] bg-cover bg-no-repeat pl-[10%] pr-[10%] pt-20 md:[70dvh]">
        <div className="flex flex-col justify-between w-[100%] md:flex-row">
          <div>
            <img className="w-[9rem]" src="/logo/smart_lights_logo.svg"></img>
          </div>
          <div>
            <div className="flex gap-2 w-[40dvw] text-sm  text-white font-normal justify-evenly mt-10  md:mt-0  ">
              <div className="cursor-pointer">Product</div>
              <div className="cursor-pointer">Software Service</div>
              <div className="cursor-pointer">Follow Us</div>
            </div>
          </div>
        </div>

        <div className="w-[70%] h-[0.5px] bg-white mt-[15dvh] md:mt-[10dvh]"></div>

        <div className="text-xs text-white font-light flex gap-2 md:gap-6 mt-4">
          <div>Privacy Policy</div>
          <div className="w-[0.5px] h-6 bg-white"></div>
          <div>Terms & Condition</div>
          <div className="w-[0.5px] h-6 bg-white"></div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
