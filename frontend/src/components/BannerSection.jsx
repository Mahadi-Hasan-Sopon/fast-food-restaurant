import { Typewriter } from "react-simple-typewriter";
import ContainerBox from "../utils/ContainerBox";

const BannerSection = () => {
  return (
    <ContainerBox>
      <div>
        <div className="content">
          <h1 className="text-4xl font-bold">
            Deliver Food To your Door Step |
            <Typewriter
              words={["Deliver Food To your Door Step"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-lg">
            Authentic Food|, Quick Service, Fast Delivery
          </p>
        </div>
      </div>
    </ContainerBox>
  );
};

export default BannerSection;
