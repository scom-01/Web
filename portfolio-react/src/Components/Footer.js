import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { imageData, linkData } from "../Data/Data"; // 경로는 실제 파일 위치에 따라 수정

function Footer() {
  const GameLinks = [
    {
      idx: 0,
      text: "TGB",
      img_href: linkData.TGB_Video.linkUrl,
    },
    {
      idx: 1,
      text: "HIM",
      img_href: linkData.HIM_Video.linkUrl,
    },
    {
      idx: 2,
      text: "PeaceMaker",
      img_href: linkData.PeaceMaker_Video.linkUrl,
    },
    {
      idx: 3,
      text: "Github",
      img_href: linkData.Github.linkUrl,
    },
  ];
  return (
    <div className={styles.Footer}>
      <div className={styles.links}>
        <span>플레이 영상 : </span>
        {GameLinks.map((link) => (
          <span key={link.idx} className={styles.videolink}>
            <a href={link.img_href}>{link.text}</a>
          </span>
        ))}
      </div>
      <div className={styles.policy}>
        <div className={styles.policy_sub}>
          <Link to="/About">about</Link>
          <Link to="/Games">games</Link>
          <Link to="/">careers</Link>
          <Link to="/">contact me</Link>
        </div>
        <div className={styles.policy_link}>
          <Link to="/" style={{ fontWeight: 700 }}>
            개인정보처리방침
          </Link>
          <Link to="/">영상정보처리기기 설치운영 관리방침</Link>
        </div>
      </div>
      <div className={styles.address_info}>
        <div className={styles.address}>@Copyright 2024</div>
      </div>
    </div>
  );
}

export default Footer;
