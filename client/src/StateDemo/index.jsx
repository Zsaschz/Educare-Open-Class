import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";
import useScrollPosition from "../hooks/scrollPosition";

const StateDemo = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

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
          Toggle Effect Demo
        </button>
        {show ? <EffectDemo /> : ""}
      </div>
    </>
  );
};

export default StateDemo;

const EffectDemo = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   console.log("Effect Run");
  //   setLoading(false);
  // }); //Run multiple times

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
      <div className="bg-white px-3 py-4 mt-5 rounded-md">
        <div className="text-2xl mt-2 text-black">useEffect Demo</div>
        <button
          onClick={toggleShow}
          className="bg-slate-800 text-white py-2 px-3 rounded-md mt-2"
        >
          Toggle Show Scroll
        </button>
      </div>
      {show ? <ScrollPosition /> : ""}
    </div>
  );
};

const ScrollPosition = () => {
  const x = useScrollPosition();
  const { textColor } = useContext(ThemeContext);

  return (
    <div className="h-screen bg-slate-800">
      <div className={`text-5xl text-${textColor} mt-5`}>
        Text Color is "{textColor}"
      </div>
      <div className={`text-5xl fixed left-0 bottom-0 text-${textColor}`}>
        {x}
      </div>
    </div>
  );
};
