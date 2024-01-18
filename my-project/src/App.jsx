import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("purple");

  function colorChange(c) {
    setColor(c);
    console.log(typeof c);
  }

  return (
    <>
      <div
        className="h-screen w-full  flex flex-wrap justify-center bottom-10 bg-purple-950"
        style={{ backgroundColor: color }}
      >
        <div className="bg-white rounded-full  self-end mx-5 my-5  flex  justify-center gap-5  flex-wrap bottom-10  ">
          <button
            className="outline-double h-10 rounded-full  w-15 mx-4 my-4 px-3 py-30 "
            onClick={() => {
              colorChange("red");
            }}
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            className="outline-double rounded-full h-10   w-15 mx-4 my-4 px-3 py-30 "
            onClick={() => {
              colorChange("blue");
            }}
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            className="outline-double h-10 rounded-full   w-15 mx-4 my-4 px-3 py-30"
            onClick={() => {
              colorChange("green");
            }}
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
