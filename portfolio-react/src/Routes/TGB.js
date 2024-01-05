import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Home.module.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function TGB() {
  const [scrollTop, setScrollTop] = useState(true);
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const { gameId } = useParams();

  useEffect(() => {
    const hash = window.location.hash;
    console.log("Hash:", hash.split("#")[1]);
    // 페이지가 로드되면 해당 ID로 스크롤
    const targetSection = document.getElementById(hash.split("#")[1]);
    if (targetSection) {
      targetSection.scrollIntoView({
        /*behavior: "smooth"*/
      });
    }

    const handleShowBtn = () => {
      if (window.scrollY > 100) {
        setScrollTop(false);
      } else setScrollTop(true);
    };
    window.addEventListener("scroll", handleShowBtn);
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    };
  }, [gameId]);

  return (
    //Home구성
    <div className={styles.Home}>
      <div className={styles.nav_holder}>
        <Nav />
      </div>
      <div className={styles.container}>
        <div className={styles.go_top_wrapper}>
          <div className={styles.btn_go_top_holder}>
            {scrollTop ? (
              ""
            ) : (
              <button onClick={scrollToTop} className={styles.btn_go_top}>
                Top
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TGB;
