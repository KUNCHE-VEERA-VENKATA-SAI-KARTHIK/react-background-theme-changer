import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <>
      <h1 className="text-3xl bg-red-950 ">Hello world!</h1>
    </>
  );
}

export default App;
