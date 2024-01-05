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

import { imageData, linkData } from "../Data/Data"; // 경로는 실제 파일 위치에 따라 수정

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
      img_href: imageData.TGB_Title_img.imageUrl,
      img: imageData.TGB_Title_Text_img.imageUrl,
      subItems: [
        {
          id: 0,
          text: "Games",
          href: linkData.TGB_Download,
        },
        { id: 1, text: "Play Video", href: linkData.TGB_Video.linkUrl },
      ],
    },
    {
      idx: 1,
      text: "HIM",
      img_href: imageData.HIM_Title_img.imageUrl,
      img: "",
      subItems: [
        {
          id: 0,
          text: "Games",
          href: linkData.HIM_Download.linkUrl,
        },
        {
          id: 1,
          text: "Play Video",
          href: linkData.HIM_Video.linkUrl,
        },
      ],
    },
    {
      idx: 2,
      text: "PeaceMaker",
      img_href: imageData.PeaceMaker_Title_img.imageUrl,
      img: "",
      subItems: [
        {
          id: 0,
          text: "Play Video",
          href: linkData.PeaceMaker_Video.linkUrl,
        },
      ],
    },
  ];

  const SectionItems = [
    {
      idx: 0,
      text: "TGB_1",
      img: imageData.TGB_Title_img.imageUrl,
      descript: "TGBTGBTGBTGBTGBTGBTGBTGBTGBTGBvvvvvvTGB",
    },
    {
      idx: 1,
      text: "TGB_2",
      img: imageData.TGB_Title_img.imageUrl,
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
                  style={{
                    backgroundImage: `url(${slideItem.img_href})`,
                  }}
                >
                  <section className={styles.swiper_slide_body}>
                    {slideItem.img !== "" ? (
                      <img
                        className={"game_img"}
                        src={slideItem.img}
                        alt="Title_img"
                      ></img>
                    ) : (
                      <div className={styles.swiper_btn_Transparent}></div>
                    )}
                    <div className={styles.swiper_slide_body_btns}>
                      {slideItem.subItems.map((sublink) => (
                        <Link
                          key={sublink.id}
                          to={sublink.href.linkUrl}
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
                      <img src={sectionItem.img} alt={sectionItem.img} />
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
                      <img src={sectionItem.img} alt={sectionItem.img} />
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
