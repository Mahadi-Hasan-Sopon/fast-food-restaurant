import ContainerBox from "./utils/ContainerBox";
import Navbar from "./components/Navbar";
import BannerSection from "./components/BannerSection";
import Carousel from "./components/Carousel";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContextProvider";

function App() {
  // eslint-disable-next-line no-unused-vars
  const { foodItems, addItem } = useContext(StoreContext);
  // const [popularItems, setPopularItems] = useState([]);
  // const [recommendedItems, setRecommendedItems] = useState([]);

  const addFoot = (foodDetails) => {
    // addItem(foodDetails);
    console.log(foodDetails);
  };

  // console.log({ foodItems, localFoodData, from: "in App.jsx" });

  const popularItemsFilter = foodItems?.Items?.filter((item) => item.IsPopular);

  const recommendedItemsFilter = foodItems?.Items?.filter(
    (item) => item.IsRecommended
  );

  // console.log({ popularItemsFilter, recommendedItemsFilter });

  return (
    <div className="font-poppins pb-96">
      <ContainerBox>
        <Navbar />
        <BannerSection />
        <div className="popularCarousel-section px-4 md:pl-10 pt-12 md:pt-0">
          <Carousel
            carouselId="popularCarousel"
            carouselItems={popularItemsFilter}
            carouselTitle="Popular"
            buttonText="AddMore"
            addFood={addFoot}
          />
        </div>
        <div className="recommendedCarousel-section px-4 md:pl-10 mt-12 md:mt-8 mb-16 md:mb-28">
          <Carousel
            carouselId="recommendedCarousel"
            carouselItems={recommendedItemsFilter}
            carouselTitle="Recommended"
            buttonText="AddMore"
            addFood={addFoot}
          />
        </div>
      </ContainerBox>
    </div>
  );
}

export default App;
