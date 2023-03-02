import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

function Home() {
  const [show, setShow] = useState(true);
  const btnClick = (event) => {
    setShow(!show);
  };
  const [scrollTop, setScrollTop] = useState(true);
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 100) {
        setScrollTop(false);
      } else setScrollTop(true);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleShowBtn);
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    };
  }, []);

  return (
    <div className={styles.Home}>
      {show ? <Nav /> : ""}

      <div className={styles.container}>
        <section>
          <div>
            <button onClick={btnClick}>{show ? "Hide" : "Show"}</button>
          </div>
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
      {show ? <Footer /> : ""}
    </div>
  );
}

export default Home;
