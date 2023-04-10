//General components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Page components
import Categories from "./pages/Home/components/Categories";
import Blog from "./pages/Home/components/Blog";
import Xmas from "./pages/Home/components/Xmas";

function Home() {
  return (
    <div className="p-0 m-0 w-screen ">
      <div className="h-screen">
        <section className=" bg-white h-14 xl:h-16 2xl:h-20 w-full mt-1 lg:mt-2 px-2 sticky top-0">
          <Header></Header>
        </section>
        <section className="h-full w-full bg-black mt-3">
          <div className=" h-4/5 w-full">
            <Categories />
          </div>
          <div className=" h-5/6 sm:h-2/5 w-full bg-base-dark sm:grid sm:grid-cols-2">
            <div className=" bg-white h-1/2 sm:h-full">
              <Blog />
            </div>
            <div className=" bg-white h-1/2 sm:h-full">
              <Xmas />
            </div>
          </div>
          <div className="bg-base-medium py-2">
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
