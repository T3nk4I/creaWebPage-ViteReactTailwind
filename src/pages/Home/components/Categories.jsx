import React from "react";

export default function Categories() {
  return (
    <div className="bg-base w-full h-full">
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
