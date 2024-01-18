import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  function colorChange(c) {
    setColor(c);
    console.log(typeof c);
  }

  return (
    <>
      <div
        className="w-full h-screen flex align-bottom "
        style={{ backgroundColor: color }}
      >
        <h1 className="underline  flex  justify-center align-bottom ">hi</h1>
        <div className="bg-white  flex flex-wrap   px-3 py-5  ">
          <button
            className="bg-red rounded-xl outline-dashed px-3 py-5"
            onClick={() => {
              colorChange("red");
            }}
          >
            red{" "}
          </button>
          <button
            className="bg-red rounded-xl   outline-dashed px-3 py-3 "
            onClick={() => {
              colorChange("blue");
            }}
          >
            {" "}
            blue{" "}
          </button>
          <button
            className="bg-red rounded-xl flex  outline-dashed px-3"
            onClick={() => {
              colorChange("green");
            }}
          >
            green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
