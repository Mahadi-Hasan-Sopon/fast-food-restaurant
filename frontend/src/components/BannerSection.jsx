import { Typewriter } from "react-simple-typewriter";
import ContainerBox from "../utils/ContainerBox";

import BannerImage from "../assets/Image1.png";

const BannerSection = () => {
  return (
    <ContainerBox styles={"md:my-[128px] md:px-10 px-4 my-12"}>
      <div className="flex flex-col md:flex-row gap-y-16 md:gap-y-4 md:gap-6 justify-between md:bg-primaryOrange rounded-3xl">
        <div className="content w-full h-auto md:w-1/2 md:pl-[104px] md:pt-[74px] min-h-28 mb-10 md:mb-0">
          <h1 className="text-3xl text-slate-800 md:text-slate-200 md:text-[40px] font-semibold md:leading-tight text-center md:text-left h-24 max-h-28 md:h-full">
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
          <p className="text-[19px] text-center md:text-left text-slate-600 md:text-slate-200/90 leading-relaxed">
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
        <div className="image w-full md:w-1/2 relative bg-[#FD9460] md:bg-primaryOrange rounded-[40px]">
          <img
            className="max-w-full w-full max-h-64 md:max-h-80 h-full object-cover"
            src={BannerImage}
            alt="banner Image"
          />
          {/* <div className="md:hidden absolute left-0 -bottom-1 -z-10 w-full h-4/6 bg-[#FD9460] rounded-3xl"></div> */}
        </div>
      </div>
    </ContainerBox>
  );
};

export default BannerSection;
