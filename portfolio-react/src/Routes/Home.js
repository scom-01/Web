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
      text: "PeaceMaker",
      img: imageData.PeaceMaker_Title_img.imageUrl,
      descript:
        "첫 팀 프로젝트 과제로 제작한 PeaceMaker입니다. 클래시오브클랜같은 전략 디펜스 게임을 목표로 제작되었습니다. 제작 시 짧은 개발 기간과 인원이탈로 인해 어려움이 많았습니다. 학원생들로만 구성되었기 때문에 경험 또한 부족했습니다. 하지만 강사님께서 리소스와 도움을 주셔서 주어진 기간내에 잘 마무리 할 수 있었습니다.",
    },
    {
      idx: 1,
      text: "HIM",
      img: imageData.HIM_Title_img.imageUrl,
      descript:
        "아웃라스트, 바이오하자드같은 1인칭 스릴러 게임을 생각하고 처음으로 1인 개발한 공포 게임인 HIM입니다. Draw Call, Object Pooling, 캐릭터의 움직임과 적의 이동 동선 및 애니메이션, Enemy AI 등을 처음으로 접한 게임입니다. 모든 코드는 에셋없이 직접 제작하였습니다.",
    },
    {
      idx: 2,
      text: "TGB",
      img: imageData.TGB_Title_img.imageUrl,
      descript:
        "Skul: The Hero Slayer 에 영감을 받아 만든 1인 개발한 2D Platformer Roguelike 게임인 The Greatest Blacksmith 입니다. 게임을 개발하는 과정이 마치 대장간에서 제련하는 대장장이와 같다는 생각으로 시작하였습니다. 제작 당시 얻을 수 있는 리소스를 기반으로 줄거리를 구성하였고 훈련기관 당시 역기획한 Skul에 영감을 받아 플레이스타일을 정했습니다. 2D 도트 그래픽, 훌륭한 타격감을 구현하고자 리소스 세팅과 코드는 모두 직접 구현하였습니다.",
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
          <section className={styles.subpage_container}>
            {SectionItems.map((Item, index) => (
              <div>
                {index % 2 === 0 ? (
                  <>
                    <div className={styles.content1}>
                      <img
                        className={styles.about1}
                        src={Item.img}
                        alt={Item.img}
                      />
                      <p className={styles.content_text}>{Item.descript}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.content2}>
                      <p className={styles.content_text}>{Item.descript}</p>
                      <img
                        className={styles.about1}
                        src={Item.img}
                        alt={Item.img}
                      />
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
