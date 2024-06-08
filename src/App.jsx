import ContainerBox from "./utils/ContainerBox";
import Navbar from "./components/Navbar";
import BannerSection from "./components/BannerSection";
import Carousel from "./components/Carousel";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContextProvider";
import Footer from "./components/Footer";

function App() {
  const { foodItems, addItem } = useContext(StoreContext);

  const addFoot = (foodDetails) => {
    addItem(foodDetails);
  };

  const popularItemsFilter = foodItems?.Items?.filter((item) => item.IsPopular);

  const recommendedItemsFilter = foodItems?.Items?.filter(
    (item) => item.IsRecommended
  );

  return (
    <div className="font-poppins">
      <ContainerBox>
        <Navbar />
        <BannerSection />
        <div className="popularCarousel-section px-4 md:pl-10 pt-4 md:pt-0">
          <Carousel
            carouselId="popularCarousel"
            carouselItems={popularItemsFilter}
            carouselTitle="Popular"
            buttonText="AddMore"
            addFood={addFoot}
            IsApiData={foodItems?.IsApiData}
          />
        </div>
        <div className="recommendedCarousel-section px-4 md:pl-10 mt-6 md:mt-8 mb-16 md:mb-28">
          <Carousel
            carouselId="recommendedCarousel"
            carouselItems={recommendedItemsFilter}
            carouselTitle="Recommended"
            buttonText="AddMore"
            addFood={addFoot}
            IsApiData={foodItems?.IsApiData}
          />
        </div>
      </ContainerBox>
      <Footer />
    </div>
  );
}

export default App;
