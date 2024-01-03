import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.links}>
        <a href="https://www.youtube.com/watch?v=gghV7XPoSxE&ab_channel=Dev_KDH">
          유튜브
        </a>
      </div>
      <div className={styles.policy}>
        <div className={styles.policy_sub}>
          <Link to="/">about</Link>
          <Link to="/Games">games</Link>
          <Link to="/">news</Link>
          <Link to="/">investors</Link>
          <Link to="/">careers</Link>
          <Link to="/">contact</Link>
        </div>
        <div className={styles.policy_link}>
          <Link to="/" style={{ fontWeight: 700 }}>
            개인정보처리방침
          </Link>
          <Link to="/">영상정보처리기기 설치운영 관리방침</Link>
        </div>
      </div>
      <div className={styles.address_info}>
        <div className={styles.address}>@Copyright 2023</div>
      </div>
    </div>
  );
}

export default Footer;
