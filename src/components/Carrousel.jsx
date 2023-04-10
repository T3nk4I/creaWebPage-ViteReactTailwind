import { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

//Images import
import aaaaa from "../assets/aaaaa.jpeg";
import creaLogo from "../assets/creaLogo.jpeg";
import elCreaTeNecesita from "../assets/elCreaTeNecesita.jpeg";

export default function Carrousel() {
  const imagesArray = [aaaaa, creaLogo, elCreaTeNecesita];

  return (
    <div className="w-full h-full">
      <div className="group bg-base-dark h-4/6 min-w-full m-auto border border-primary/10">
        <div
          className=" h-full max-w-full bg-cover bg-center duration-500"
          style={{ backgroundImage: `url(${imagesArray[1]})` }}
        />
        <div
          className="opacity-40 group-hover:opacity-100 absolute top-[50%] translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-xl px-2 py-3 bg-black/20 hover:bg-black/40 text-white
         cursor-pointer duration-75  "
        >
          <BsChevronCompactLeft size={20} />
        </div>
        <div
          className="opacity-40 group-hover:opacity-100 absolute top-[50%] translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-xl px-2 py-3 bg-black/20 hover:bg-black/40 text-white
         cursor-pointer duration-75"
        >
          <BsChevronCompactRight size={20} />
        </div>
      </div>
      <div className=" h-1/6 flex place-items-center justify-center">
        Categoria
      </div>
      <div className=" h-1/6 flex place-items-center justify-center">
        Puntitos
      </div>
    </div>
  );
}
