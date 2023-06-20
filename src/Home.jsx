//General components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Page components
import Categories from "./pages/Home/components/Categories";
import Blog from "./pages/Home/components/Blog";
import Xmas from "./pages/Home/components/Xmas";

//Assets
import VideoBack from "./components/VideoBack";

function Home() {
  return (
    <div className="p-0 m-0">
      <div>
        <section className=" bg-white h-12 lg:h-14 xl:h-16 2xl:h-20  w-full mt-1 lg:mt-2 px-2 sticky top-0 z-20">
          <Header></Header>
        </section>
        <section className="w-full bg-black mt-3">
          <div className=" bg h-96 w-full">
            <VideoBack />
            <div className="h-full w-full z-10">
              <Categories />
            </div>
          </div>
          <div className=" h-96 w-full sm:flex">
            <div className=" w-full bg-white h-1/2 sm:h-full sm:w-1/2 border border-base-light border-opacity-30">
              <Blog />
            </div>
            <div className=" w-full bg-white h-1/2 sm:h-full sm:w-1/2 border border-base-light border-opacity-30">
              <Xmas />
            </div>
          </div>
        </section>
        <div className=" bg-primary-dark w-full h-auto">
          <Footer />
        </div>
        <div className=" h-96 w-full">
          <VideoBack />
        </div>
      </div>
    </div>
  );
}

export default Home;
