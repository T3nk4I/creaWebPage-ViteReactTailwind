import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-28 w-full bg-shPrimary-dark text-white text-4xl">
      Hola
    </div>
  );
}

export default App;
