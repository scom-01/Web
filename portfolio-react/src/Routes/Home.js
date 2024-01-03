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
import TGB_TitlePng from "../Images/TGB_Title.png";
import TGB_Title_Text_img from "../Images/TGB_Text_img.png";
import VillagePng from "../Images/TGB_Village.png";
import HIM_Title_img from "../Images/HIM_Title.png";
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

  const SlideItems = [
    {
      idx: 0,
      text: "TGB",
      img_href: TGB_TitlePng,
      img: TGB_Title_Text_img,
      subItems: [
        { id: 0, text: "Games", href: "/Games/TGB#tgb" },
        { id: 1, text: "Play Video", href: "/neowiz/about#history" },
      ],
    },
    {
      idx: 1,
      text: "HIM",
      img_href: HIM_Title_img,
      img: "",
      subItems: [
        { id: 0, text: "Games", href: "/Games/HIM" },
        {
          id: 1,
          text: "Play Video",
          href: "https://www.youtube.com/watch?v=gghV7XPoSxE&ab_channel=Dev_KDH",
        },
      ],
    },
  ];

  const SectionItems = [
    {
      idx: 0,
      text: "TGB_1",
      img: TGB_TitlePng,
      descript: "TGBTGBTGBTGBTGBTGBTGBTGBTGBTGBvvvvvvTGB",
    },
    {
      idx: 1,
      text: "TGB_2",
      img: TGB_TitlePng,
      descript: "TGBTGBTGBTGBTGBTGBTGBTGBTGBTGBTGBTGBTGBTGBTGBTGB",
    },
  ];
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
            {SlideItems.map((slideItem) => (
              <SwiperSlide key={slideItem.idx} className={styles.swiper_slide}>
                <div
                  className={styles.swiper_slide_image}
                  style={{ backgroundImage: `url(${slideItem.img_href})` }}
                >
                  <section className={styles.swiper_slide_body}>
                    {slideItem.img !== "" ? (
                      <img
                        className={"game_img"}
                        src={slideItem.img}
                        alt="Title_img"
                      ></img>
                    ) : (
                      <span className={styles.swiper_slide_body_game_Txt}>
                        {slideItem.text}
                      </span>
                    )}
                    <div className={styles.swiper_slide_body_btns}>
                      {slideItem.subItems.map((sublink) => (
                        <Link
                          key={sublink.id}
                          to={sublink.href}
                          className={styles.swiper_btn_banner}
                        >
                          <span>{sublink.text}</span>
                        </Link>
                      ))}
                    </div>
                  </section>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div className={styles.go_top_wrapper}>
          <section className={styles.section_screenshot}>
            {SectionItems.map((sectionItem, index) => (
              <div key={sectionItem.id} className={styles.section_item}>
                {index % 2 === 0 ? (
                  <>
                    <div className={styles.section_item_even}>
                      <img src={sectionItem.img} alt="Image" />
                      <div className={styles.section_item_txt}>
                        {sectionItem.descript}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.section_item_odd}>
                      <div className={styles.section_item_txt}>
                        {sectionItem.descript}
                      </div>
                      <img src={sectionItem.img} alt="Image" />
                    </div>
                  </>
                )}
              </div>
            ))}
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
