import ContainerBox from "./utils/ContainerBox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-poppins ">
      <ContainerBox>
        <Navbar />
        {/* <h1 className="text-3xl font-bold font-ubuntu text-red-600 mt-9">pti.</h1> */}
      </ContainerBox>
    </div>
  );
}

export default App;
