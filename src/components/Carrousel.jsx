import { useState, useEffect } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

//Images import. Import your own images or it wont work
import image1 from "../assets/aaaaa.jpeg";
import image2 from "../assets/creaLogo.jpeg";
import image3 from "../assets/elCreaTeNecesita.jpeg";

export default function Carrousel() {
  const imagesArray = [
    { image: image1, name: "Guerra de Robots" },
    { image: image2, name: "Minisumos" },
    { image: image3, name: "Seguidor de linea" },
    { image: image1, name: "Futbolito" },
    { image: image2, name: "Laberinto" },
    { image: image3, name: "Carrera de insectos" },
    { image: image1, name: "Drones" },
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
    <div className="w-full h-full">
      <div className="group bg-base-dark h-4/6 min-w-full m-auto border border-primary/10">
        <div
          className=" h-full max-w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imagesArray[currentIndex].image})` }}
        />
        <div
          className="opacity-40 group-hover:opacity-100 absolute top-[50%] translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-xl px-2 py-3 bg-black/20 hover:bg-black/40 text-white
         cursor-pointer duration-75  "
        >
          <BsChevronCompactLeft size={20} onClick={prevSlide} />
        </div>
        <div
          className="opacity-40 group-hover:opacity-100 absolute top-[50%] translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-xl px-2 py-3 bg-black/20 hover:bg-black/40 text-white
         cursor-pointer duration-75"
        >
          <BsChevronCompactRight size={20} onClick={nextSlide} />
        </div>
      </div>
      <div className=" h-1/6 flex place-items-center justify-center">
        {imagesArray[currentIndex].name}
      </div>
      <div className=" h-1/6 flex place-items-center justify-center">
        {imagesArray.map((slide, index) => (
          <div
            className=" text-2xl cursor-pointer"
            key={index}
            onClick={() => goToSlide(index)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
