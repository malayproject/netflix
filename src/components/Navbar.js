import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import styles from "../Navbar.module.css";
import { memo } from "react";

const Navbar = (props) => {
  const { isScrolled } = props;
  return (
    <div
      className={
        isScrolled ? `${styles.navbar} ${styles.opaque}` : styles.navbar
      }
      id="navbar"
    >
      <LeftNav />
      <RightNav />
    </div>
  );
};

export default memo(Navbar);
