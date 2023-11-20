import { Link } from "react-router-dom";

const LeftNav = (props) => {
  return (
    <div className="leftNav">
      <img
        className="logoContainer"
        src={
          "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        }
        alt={"netfilx logo"}
      ></img>
      <ul className="tabsContainer">
        <li className="tabItem">
          {/* <Link className="homeLink" to={""}> */}
          Home
          {/* </Link> */}
        </li>
        <li className="tabItem">
          {/* <Link className="homeLink" to="/genre/83"> */}
          TV Shows
          {/* </Link> */}
        </li>
        <li className="tabItem">
          {/* <Link className="homeLink" to={"./genre/34339"}> */}
          Movies
          {/* </Link> */}
        </li>
        <li className="tabItem">
          {/* <Link className="homeLink"> */}
          New & Popular
          {/* </Link> */}
        </li>
        <li className="tabItem">
          {/* <Link className="homeLink" to={"./my-list"}> */}
          My List
          {/* </Link> */}
        </li>
        <li className="tabItem">
          {/* <Link className="homeLink" to={"./original-audio"}> */}
          Browse By Languages
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
