import { useState, useEffect } from "react";

const useScroll = (scrollThreshold) => {
  const [scrollThresholdReached, setScrollThresholdReached] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > scrollThreshold
        ? setScrollThresholdReached(true)
        : setScrollThresholdReached(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return scrollThresholdReached;
};

export default useScroll;
