import React from "react";
import aaaaa from "../assets/aaaaa.jpeg";
import creaLogo from "../assets/creaLogo.jpeg";
import elCreaTeNecesita from "../assets/elCreaTeNecesita.jpeg";

export default function Carrousel() {
  const imagesArray = [aaaaa, creaLogo, elCreaTeNecesita];
  return (
    <div className="w-full">
      <img src={imagesArray[0]} alt="" className=" w-10/12 m-auto" />
    </div>
  );
}
