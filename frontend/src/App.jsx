import ContainerBox from "./utils/ContainerBox";
import Navbar from "./components/Navbar";
import BannerSection from "./components/BannerSection";
import Carousel from "./components/Carousel";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContextProvider";

function App() {
  // eslint-disable-next-line no-unused-vars
  const { foodItems, addItem } = useContext(StoreContext);

  const addFoot = (foodDetails) => {
    // addItem(foodDetails);
    console.log(foodDetails);
  };

  const popularItems = foodItems?.Items.filter((item) => item.IsPopular);

  const recommendedItems = foodItems?.Items.filter(
    (item) => item.IsRecommended
  );

  return (
    <div className="font-poppins pb-96">
      <ContainerBox>
        <Navbar />
        <BannerSection />
        <div className="popularCarousel-section px-4 md:pl-10">
          <Carousel
            carouselId="popularCarousel"
            carouselItems={popularItems}
            carouselTitle="Popular"
            buttonText="AddMore"
            addFood={addFoot}
          />
        </div>
        <div className="recommendedCarousel-section px-4 md:pl-10">
          <div className="my-8">
            <Carousel
              carouselId="recommendedCarousel"
              carouselItems={recommendedItems}
              carouselTitle="Recommended"
              buttonText="AddMore"
              addFood={addFoot}
            />
          </div>
        </div>
      </ContainerBox>
    </div>
  );
}

export default App;
