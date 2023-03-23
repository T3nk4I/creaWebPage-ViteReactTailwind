import Header from "./components/Header";
import Xmas from "./components/Xmas";

function Home() {
  return (
    <div className="p-0 m-0 h-screen">
      <section className=" h-14 w-screen mt-2 px-2">
        <Header></Header>
      </section>
      <section className="flex h-5/6 mt-4">
        <div className=" bg-base w-1/2 h-full grid grid-cols-1 place-content-evenly p-6">
          <div>
            <button className="">Guerra de Robots de 3 libra</button>
          </div>
          <div>
            <button className="">Guerra de Robots de 1 libra</button>
          </div>
          <div>
            <button className=" ">Guerra de Robots de 12 libra</button>
          </div>
          <div>
            <button className=" ">
              Minisumo Autonomo profesional y amateur
            </button>
          </div>
          <div>
            <button className="">Minisumo RC profesional y amateur</button>
          </div>
          <div>
            <button className="">Microsumo</button>
          </div>
          <div>
            <button className="">
              Seguidor de linea profesional y amateur
            </button>
          </div>
          <div>
            <button className="">Carrera de Insectos</button>
          </div>
          <div>
            <button className="">Futbol RC</button>
          </div>
          <div>
            <button className="">Laberinto</button>
          </div>
          <div>
            <button className="">Drones</button>
          </div>
        </div>
        <section className=" bg-base-dark w-1/2 h-full">
          <div className=" bg-primary-light w-full h-1/2">Blog</div>
          <div className=" bg-primary-dark w-full h-1/2">Xmas</div>
        </section>
      </section>
    </div>
  );
}

export default Home;
