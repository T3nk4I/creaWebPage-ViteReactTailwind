import React from "react";
import elCreaTeNecesita from "../assets/elCreaTeNecesita.jpeg";

export default function Xmas() {
  return (
    <div className="h-full w-full border-b border-base-light border-opacity-40">
      <div className="">
        <h2 className="text-base-medium font-semibold text-base w-full text-center pt-4 pb-2 tracking-wide">
          Xmas
        </h2>
        <h4 className="text-base-medium text-opacity-75 font-semibold text-xs w-full text-center pb-4 tracking-wide">
          ¡Conoce nuestro evento anual más importante!
        </h4>
      </div>
      <div className=" h-4/6 flex place-content-center">
        <img src={elCreaTeNecesita} alt="" className=" h-full" />
      </div>
    </div>
  );
}
