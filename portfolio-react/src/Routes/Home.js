import { useState } from "react";
import styles from "./Home.module.css";

function Home() {
  const [show, setShow] = useState(true);
  const btnClick = () => {
    setShow((event) => !event);
  };
  return (
    <div className={styles.Home}>
      {show ? (
        <div className={styles.header}>
          <h1>Header</h1>
        </div>
      ) : (
        ""
      )}

      <div className={styles.container}>
        <h1>Body</h1>
        <button onClick={btnClick}>{show ? "Hide" : "Show"}</button>
      </div>
      {show ? (
        <div className={styles.footer}>
          <h1>Footer</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
