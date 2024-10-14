import s from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.pageName}>Routing</div>
      <Navigation />
    </header>
  );
};

export default Header;
