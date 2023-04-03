//General components
import Header from "./components/Header";

//Page components
import Categories from "./pages/Home/components/Categories";

function Home() {
  return (
    <div className="p-0 m-0 w-screen ">
      <div className="h-screen flex flex-col">
        <section className=" flex-shrink-0 h-14 xl:h-16 2xl:h-20 w-full mt-4 lg:mt-2 px-2">
          <Header></Header>
        </section>
        <section className="flex-auto w-full bg-base">
          <div className=" h-80 w-full bg-primary">
            <Categories />
          </div>
          <div className="h-80 w-full bg-primary-dark">Hola</div>
        </section>
      </div>
      {/* <section className="flex h-5/6 mt-4">
        
        <section className=" bg-base-dark w-1/2 h-full">
          <div className=" bg-primary-light w-full h-1/2">Blog</div>
          <div className=" bg-primary-dark w-full h-1/2">Xmas</div>
        </section>
      </section> */}
    </div>
  );
}

export default Home;
