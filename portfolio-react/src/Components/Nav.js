import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className={styles.Nav}>
      <Link to={"/"}>SCOM</Link>
    </div>
  );
}

export default Nav;
