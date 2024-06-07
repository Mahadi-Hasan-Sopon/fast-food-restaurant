import { Typewriter } from "react-simple-typewriter";
import ContainerBox from "../utils/ContainerBox";

import BannerImage from "../assets/Image1.png";

const BannerSection = () => {
  return (
    <ContainerBox styles={"md:my-[128px] md:px-10 px-4 my-14"}>
      <div className="grid md:flex md:gap-6 justify-between md:bg-primaryOrange rounded-3xl">
        <div className="content md:pl-[104px] md:pt-[74px] w-full md:w-1/2 min-h-28">
          <h1 className="text-3xl md:text-[40px] font-bold md:leading-tight text-center md:text-left">
            <Typewriter
              words={["Deliver Food To Your Door Step"]}
              loop={false}
              cursor
              cursorStyle="|"
              cursorBlinking
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </h1>
          <p className="text-[19px] text-center md:text-left text-slate-500 md:text-slate-200/90 leading-relaxed">
            <Typewriter
              words={["Authentic Food,"]}
              loop={false}
              cursor
              cursorStyle="|"
              cursorBlinking
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={2000}
            />{" "}
            Quick Service, Fast Delivery
          </p>
        </div>
        <div className="image w-full md:w-1/2 relative">
          <img
            className="max-w-full max-h-80 h-full "
            src={BannerImage}
            alt="banner Image"
          />
          <div className="md:hidden absolute left-0 -bottom-1 -z-10 w-full h-4/6 bg-[#FD9460] rounded-3xl"></div>
        </div>
      </div>
    </ContainerBox>
  );
};

export default BannerSection;
