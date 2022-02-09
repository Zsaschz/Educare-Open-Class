import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updatePosition = () => {
        // console.log("scrolll");
        setScrollPosition(window.pageYOffset);
      };
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition); // We need this so that there is no memory leaks
    } else return () => {};
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
