import ContainerBox from "./utils/ContainerBox";
import Navbar from "./components/Navbar";
import BannerSection from "./components/BannerSection";

function App() {
  return (
    <div className="font-poppins ">
      <ContainerBox>
        <Navbar />
        <BannerSection />
      </ContainerBox>
    </div>
  );
}

export default App;
