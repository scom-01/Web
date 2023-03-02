import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styles from "./Home.module.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Home() {
  const [show, setShow] = useState(true);
  const btnClick = (event) => {
    console.log(event.clientX);

    setShow(!show);
  };
  return (
    <div className={styles.Home}>
      {show ? <Nav /> : ""}

      <div className={styles.container}>
        <div>
          <button onClick={btnClick}>{show ? "Hide" : "Show"}</button>
        </div>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </div>
      {show ? <Footer /> : ""}
    </div>
  );
}

export default Home;
