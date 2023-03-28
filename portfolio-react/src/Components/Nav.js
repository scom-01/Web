import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Nav() {
  const [scrollTop, setScrollTop] = useState(false);
  const [screenWidth, setScreenWidth] = useState(true);
  const updateScroll = () => {
    if (window.scrollY > 50) {
      setScrollTop(true);
    } else setScrollTop(false);
  };
  useEffect(() => {
    window.addEventListener(`scroll`, updateScroll);

    return () => {
      window.removeEventListener(`scroll`, updateScroll);
    };
  }, []);

  return (
    <div className={styles.Nav}>
      <div className={styles.Nav__logo}>
        <Link to={"/"}>Top</Link>
      </div>

      <ul className={styles.Nav__menu}>
        <li>
          <Link to={"/"}>about</Link>
        </li>
        <li>
          <Link to={"/"}>games</Link>
        </li>
        <li>
          <Link to={"/"}>media</Link>
        </li>
        <li>
          <Link to={"/"}>investors</Link>
        </li>
        <li>
          <Link to={"/"}>carreers</Link>
        </li>
        <li>
          <Link to={"/"}>contact me</Link>
        </li>
      </ul>
      <a className={styles.Nav__hambuger}>햄버거</a>
    </div>
  );
}

export default Nav;
