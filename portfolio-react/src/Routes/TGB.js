import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
//Swiper 모듈
import { Navigation, Pagination, Autoplay } from "swiper";
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
        <section className={styles.slider}>
          <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={`auto`}
            speed={500}
            loop={true}
            navigation
            autoplay={{ delay: 10000 }} //10초후 넘김
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {/* <SwiperSlide className={styles.swiper_slide}>
              <div>
                <img className={styles.swiper_slide_image} src={TitlePng} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div>
                <img className={styles.swiper_slide_image} src={VillagePng} />
              </div>
            </SwiperSlide> */}
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide3</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide4</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide5</button>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className={styles.slider}>
          <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={`auto`}
            speed={500}
            loop={true}
            navigation
            autoplay={{ delay: 10000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide1</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide2</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide3</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide4</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide5</button>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className={styles.slider}>
          <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={`auto`}
            speed={500}
            loop={true}
            navigation
            autoplay={{ delay: 10000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide1</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide2</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide3</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide4</button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <button>Slide5</button>
            </SwiperSlide>
          </Swiper>
        </section>

        <div className={styles.go_top_wrapper}>
          <section className={styles.slider}>
            <Swiper
              className={styles.swiper}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={`auto`}
              speed={500}
              loop={true}
              navigation
              autoplay={{ delay: 10000 }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide1</button>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide2</button>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide3</button>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide4</button>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide5</button>
              </SwiperSlide>
            </Swiper>
          </section>
          <section className={styles.slider} id="tgb">
            <Swiper
              className={styles.swiper}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={`auto`}
              speed={500}
              loop={true}
              navigation
              autoplay={{ delay: 10000 }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide1</button>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide2</button>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide3</button>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide4</button>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <button>Slide5</button>
              </SwiperSlide>
            </Swiper>
          </section>

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
