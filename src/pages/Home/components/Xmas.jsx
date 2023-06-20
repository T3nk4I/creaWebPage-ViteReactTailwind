import React from "react";
import elCreaTeNecesita from "../assets/elCreaTeNecesita.jpeg";

export default function Xmas() {
  return (
    <div className="h-full w-full">
      <div className="h-1/4">
        <div className="w-full text-center pt-4">
          <h2 className="font-bold text-base hover:cursor-pointer text-primary-dark hover:text-primary-light  tracking-wide">
            Xmas
          </h2>
          <h4 className="hidden sm:block text-base-medium hover:cursor-pointer text-opacity-75 font-semibold text-xs w-full text-center  pt-2 pb-4 tracking-wide">
            ¡Conoce nuestro evento anual más importante!
          </h4>
        </div>
      </div>
      <div className=" h-3/4 flex place-content-center pb-4">
        <img src={elCreaTeNecesita} alt="" className=" h-full" />
      </div>
    </div>
  );
}
