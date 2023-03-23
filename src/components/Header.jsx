import React from "react";
import creaLogo from "../assets/creaLogo.jpeg";

export default function Header() {
  return (
    <div className="opacity-90 px-6 flex place-items-center h-full w-full border-b-2 border-b-primary-dark border-opacity-75">
      <button className="h-full flex-shrink-0">
        <img src={creaLogo} alt="CREA Logo" className="h-full" />
      </button>
      <div className="flex-auto text-center text-2xl text-base-light opacity-50 tracking-widest uppercase">
        Club de Robótica
      </div>
      <div className="flex flex-shrink-0 justify-end pr-4">
        <button className=" hover:text-primary-light text-primary-dark font-semibold">
          <h3>Contacto</h3>
        </button>
        <button className=" hover:text-primary-light ml-10">
          <h3>Torneos</h3>
        </button>
        <button className=" hover:text-primary-light ml-10">
          <h3>Mision</h3>
        </button>
        <button className=" hover:text-primary-light ml-10">
          <h3>Vision</h3>
        </button>
      </div>
    </div>
  );
}
