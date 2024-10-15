import s from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.pageName}>
        Movie
      </Link>
      {/* <div className={s.pageName}>Movie</div> */}
      <Navigation />
    </header>
  );
};

export default Header;
