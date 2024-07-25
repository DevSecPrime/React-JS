import { useState } from "react";
import "./App.css";

function App() {

  // let count = 0;

  // to show on UI we are required to use use state hook

  const [myCount, setCount] = useState(0);

  function decrementHandler() {
    if (myCount > 0) {
      setCount(myCount - 1);
    }
  }

  function incrementHandler() {
    setCount(myCount + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    // top level wrapper div--
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[#344151]">

      <h1 className=" text-[#0398d4] text-2xl font-medium capitalize">Increment & Decrement</h1>

      {/* counter button */}
      <div className="flex gap-12 rounded-sm  flex-row font-bold text-[25px] text=[#344151] bg-white justify-center py-3">

        <button onClick={decrementHandler} className="border-r-2 border-[#bfbfbf] text-center w-20  text-5xl">-</button>

        <div className="font-bold text-5xl gap-12">{myCount}</div>

        <button onClick={incrementHandler} className="border-l-2 border-[#bfbfbf] text-center w-20  text-5xl">+</button>

      </div>

      {/* reset button */}

      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-4 py-2 rounded-sm">Reset</button>
    </div>
  );
}

export default App;
