import { useState, useEffect } from "react";
import useScrollPosition from "../hooks/scrollPosition";

const EffectDemo = () => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading(!loading);
  };

  useEffect(() => {
    setLoading(true);
    console.log("Effect Run");
    setLoading(false);
    return () => {
      console.log("Unmounting");
    };
  }, []);

  return (
    <div>
      <div className="text-2xl mt-2 text-white">EFFECT DEMO</div>
      <div> {loading ? "loading" : "not loading"}</div>
      <button
        onClick={toggleLoading}
        className="bg-white text-black py-2 px-3 rounded-md mt-2"
      >
        Toggle Loading
      </button>
    </div>
  );
};

const StateDemo = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const x = useScrollPosition();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-slate-800 text-white flex flex-col justify-center items-center">
        <div className="text-2xl mb-2">State Demo</div>
        <div className="text-5xl">{counter}</div>
        <div className="my-2">
          <button
            className="bg-white text-black py-2 px-3 rounded-md mx-2"
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="bg-white text-black py-2 px-3 rounded-md mx-2"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <button
          className="bg-white text-black py-2 px-3 rounded-md mx-2 mt-8"
          onClick={toggleShow}
        >
          Toggle Show
        </button>
        {show ? <EffectDemo /> : ""}
      </div>
      <div className="h-screen bg-slate-800">
        <div className="text-5xl fixed left-0 bottom-0 text-white">{x}</div>
      </div>
    </>
  );
};

export default StateDemo;
