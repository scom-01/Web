import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//Swiper 모듈
import { Navigation, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

//타이틀 이미지
import TitlePng from "./TGB_Title.png";
import VillagePng from "./TGB_Village.png";
import Title_Text_img from "./TGB_Text_img.png";
function Home() {
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
    };
    window.addEventListener("scroll", handleShowBtn);
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    };
  }, []);

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
            <SwiperSlide className={styles.swiper_slide}>
              <div
                className={styles.swiper_slide_image}
                style={{ backgroundImage: `url(${TitlePng})` }}
              >
                <section className={styles.swiper_slide_body}>
                  <img
                    className={"game_img"}
                    src={Title_Text_img}
                    alt="Title_img"
                  ></img>
                  <div className={"btns"}>
                    <Link to={"/Games"} className={styles.swiper_btn_banner}>
                      <span>Games</span>
                    </Link>
                    <Link to={"/Games"} className={styles.swiper_btn_banner}>
                      <span>Play Video</span>
                    </Link>
                  </div>
                </section>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div
                className={styles.swiper_slide_image}
                style={{ backgroundImage: `url(${VillagePng})` }}
              ></div>
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
      <Footer />
    </div>
  );
}

export default Home;
