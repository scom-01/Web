import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Nav() {
  const [scrollTop, setScrollTop] = useState(true);
  const updateScroll = () => {
    setScrollTop(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener(`scroll`, updateScroll);

    return () => {
      window.removeEventListener(`scroll`, updateScroll);
    };
  }, []);

  return (
    <div>
      {scrollTop ? (
        "ss"
      ) : (
        <div className={styles.Nav}>
          <Link to={"/"}>SCOM</Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
