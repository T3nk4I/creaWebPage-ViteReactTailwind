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
        <section className="flex-auto w-ful bg-black mt-4">
          <div className=" h-96 w-full bg-primary">
            <Categories />
          </div>
          <div className="h-96 w-full bg-primary-dark">Hola</div>
        </section>
      </div>
    </div>
  );
}

export default Home;
