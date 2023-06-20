import { useState } from "react";

//Icons (arrows and dots) import. You need to install the library: npm install react-icons
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

//Images import. Import your own images or it wont work. Just change the link
import image1 from "../pages/Home/assets/battlebots.webp";
import image2 from "../pages/Home/assets/minisumos.webp";
import image3 from "../pages/Home/assets/seguidores.webp";
import image4 from "../pages/Home/assets/futbols.webp";
import image5 from "../pages/Home/assets/laberintos.webp";
import image6 from "../pages/Home/assets/insectos.webp";
import image7 from "../pages/Home/assets/drones.webp";

// You can delete or modify any object in the array
export default function Carrousel() {
  const imagesArray = [
    { image: image1, name: "Guerra de Robots" },
    { image: image2, name: "Minisumos" },
    { image: image3, name: "Seguidor de linea" },
    { image: image4, name: "Futbolito" },
    { image: image5, name: "Laberinto" },
    { image: image6, name: "Carrera de insectos" },
    { image: image7, name: "Drones" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    let isFirstSlide = currentIndex === 0;
    let newIndex = isFirstSlide ? imagesArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    let isLastSlide = currentIndex === imagesArray.length - 1;
    let newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (specificSlide) => {
    setCurrentIndex(specificSlide);
  };

  return (
    //Has w-full and h-full to adjust its entire size as its father, where will be imported
    <div className="w-full xl:mx-auto xl:w-4/6 h-full mx-auto flex flex-col items-center justify-center pb-6">
      <div className="group bg-base-dark h-5/6 h- min-w-full m-auto">
        <div
          className=" h-full max-w-full bg-cover bg-center bg-white flex items-center justify-between px-3 md:px-5 xl:px-7"
          style={{ backgroundImage: `url(${imagesArray[currentIndex].image})` }}
        >
          {/* --- Left arrows --- */}
          <div
            className=" block sm:hidden opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactLeft size={25} onClick={prevSlide} />
          </div>

          <div
            className=" hidden sm:block md:hidden opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactLeft size={35} onClick={prevSlide} />
          </div>

          <div
            className=" hidden md:block xl:hidden opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactLeft size={40} onClick={prevSlide} />
          </div>

          <div
            className=" hidden xl:block 2xl:hidden opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactLeft size={45} onClick={prevSlide} />
          </div>

          <div
            className=" hidden 2xl:block  opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactLeft size={50} onClick={prevSlide} />
          </div>

          {/* --- Right arrows --- */}

          <div
            className=" block sm:hidden opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactRight size={25} onClick={nextSlide} />
          </div>

          <div
            className=" hidden sm:block md:hidden opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactRight size={35} onClick={nextSlide} />
          </div>

          <div
            className=" hidden md:block xl:hidden opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactRight size={40} onClick={nextSlide} />
          </div>

          <div
            className=" hidden xl:block 2xl:hidden opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactRight size={45} onClick={nextSlide} />
          </div>

          <div
            className=" hidden 2xl:block  opacity-40 group-hover:opacity-100 w-fit h-fit rounded-xl bg-black/40 hover:bg-black/50 text-white
          cursor-pointer duration-75 py-2"
          >
            <BsChevronCompactRight size={50} onClick={nextSlide} />
          </div>
        </div>
      </div>

      {/* --- Section name --- */}

      <div className=" sm:text-base md:text-lg lg:text-xl h-1/6 flex flex-col place-items-center justify-center text-black/60">
        {/* -- Section dots -- */}
        <div className=" h-1/2 flex place-items-baseline justify-center">
          {imagesArray.map((slide, index) => {
            if (index === currentIndex) {
              return (
                <div
                  className=" text-xl sm:text-2xl cursor-pointer scale-125 text-primary"
                  key={index}
                  onClick={() => goToSlide(index)}
                >
                  <RxDotFilled />
                </div>
              );
            } else {
              return (
                <div
                  className=" text-xl sm:text-2xl cursor-pointer text-black/20 "
                  key={index}
                  onClick={() => goToSlide(index)}
                >
                  <RxDotFilled />
                </div>
              );
            }
          })}
        </div>

        <div className="h-1/2">{imagesArray[currentIndex].name}</div>
      </div>
    </div>
  );
}
