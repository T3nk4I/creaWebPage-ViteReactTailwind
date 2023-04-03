import React from "react";

export default function Categories() {
  return (
    <div className="bg-white w-full h-full border-b border-base-light border-opacity-40">
      <h2 className=" text-base-medium font-semibold text-base w-full text-center pt-2 tracking-wide">
        Categorías
      </h2>
      <div className="w-full h-1/2 grid grid-cols-2 p-6">
        <div className="grid place-content-between h-full">
          <div>
            <button className="text-left text-xs">
              Guerra de Robots de 3 libras
            </button>
          </div>
          <div>
            <button className="text-left text-xs">
              Guerra de Robots de 1 libras
            </button>
          </div>
          <div>
            <button className="text-left text-xs">
              Guerra de Robots de 12 libras
            </button>
          </div>
          <div>
            <button className=" text-left text-xs">
              Minisumo Autonomo profesional y amateur
            </button>
          </div>
          <div>
            <button className="text-left text-xs">
              Minisumo RC profesional y amateur
            </button>
          </div>
        </div>

        <div className="grid place-content-between h-full">
          <div>
            <button className="text-left text-xs">Microsumo</button>
          </div>
          <div>
            <button className="text-left text-xs">
              Seguidor de linea profesional y amateur
            </button>
          </div>
          <div>
            <button className="text-left text-xs">Carrera de Insectos</button>
          </div>
          <div>
            <button className="text-left text-xs">Futbol RC</button>
          </div>
          <div>
            <button className="text-left text-xs">Laberinto</button>
          </div>
          <div>
            <button className="text-left text-xs">Drones</button>
          </div>
        </div>
      </div>
    </div>
  );
}
