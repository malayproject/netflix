import React from "react";
import Navbar from "./Navbar";
import img from "../images/Netflix-Hintergrund.webp";
import useScroll from "../hooks/useScroll";
import { memo } from "react";

const NetflixApp = () => {
  const isScrolled = useScroll(10);
  return (
    <div className="NetflixApp">
      <img
        className="homePageBackground"
        src={img}
        alt={"netflix background img"}
      ></img>
      <Navbar isScrolled={isScrolled} />
    </div>
  );
};

export default memo(NetflixApp);
