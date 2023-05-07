import React from "react";
import Carrousel from "../../../components/Carrousel";

export default function Blog() {
  return (
    <div className="h-full w-full border-b border-base-light border-opacity-40">
      <h2 className="font-bold text-base text-primary-dark w-full text-center pt-4 tracking-wide">
        Blog
      </h2>
      <div className=" h-3/6 w-full">
        <Carrousel />
      </div>
    </div>
  );
}
