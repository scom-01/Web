import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./About.module.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

import { imageData, linkData } from "../Data/Data"; // 경로는 실제 파일 위치에 따라 수정

function About() {
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

  const SectionItems = [
    {
      idx: 0,
      text: "Unity",
      img: imageData.Unity_Img.imageUrl,
      descript: "",
    },
  ];

  return (
    //Home구성
    <div className={styles.Home}>
      <div className={styles.nav_holder}>
        <Nav />
      </div>
      <div className={styles.pageheader}>
        <div className={styles.header_box}>
          <div className={styles.header_title}>
            <h2>ABOUT</h2>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.go_top_wrapper}>
          <section className={styles.subpage_container}>
            <p className={styles.section_title}>계기</p>
            <img
              className={styles.section_img}
              src={imageData.Unity_Img.imageUrl}
            />
            <p className={styles.main_content}>
              대학생 시절 한 프로젝트 발표회가 열렸습니다.
              <br />
              선배님들의 프로젝트 중 하나가 눈에 띄었습니다.
              <br />
              <b>유니티</b>로 제작한 탑뷰 슈팅 게임이었습니다.
              <br />
              처음 보는 게임 제작 프로그램과 그 결과물에 흥미가 끌렸습니다.
              <br />
              직접 만들어보고 싶었고, 그렇게 <b>게임 개발자</b>가 되었습니다.
            </p>
            <div className={styles.content1}>
              <img
                className={styles.about1}
                src={imageData.PeaceMaker_Title_img.imageUrl}
              />
              <p className={styles.content_text}>
                게임을 출시하기 위해선 여러 직군이 필요하지만, 게임 프로그래머는
                핵심적인 역할인 만큼 필요로 하는 기준 수준이 높다고 생각했고
                저의 적성 또한 맞는다고 생각했습니다. 그 후, 기초 실력 향상을
                위해 정보처리산업기사 자격증을 취득하고, 훈련기관에서 유니티
                프로그래밍 과정을 이수하며 꾸준히 게임을 제작해 보면서 하고 싶은
                일, 즐기면서 할 수 있는 일을 하기 위하여 노력하고 있습니다.
                <h5>(훈련기관에 팀 프로젝트로 만든 PeaceMaker)</h5>
              </p>
            </div>
            <div className={styles.content2}>
              <p className={styles.content_text}>
                아웃라스트, 바이오하자드같은 1인칭 스릴러 게임을 생각하고
                처음으로 1인 개발한 공포 게임인 <b>HIM</b>입니다.
                <br />
                프로그래머를 꿈꿀 때 많은 영향을 준 게임인
                <b>레인보우 식스 시즈</b>의 기울이기와 바닥 지형에 따른 발걸음
                소리 변화, 3D 사운드 등 많은 요소를 경험했던 게임입니다. Draw
                Call, Object Pooling, 캐릭터의 움직임과 적의 이동 동선 및
                애니메이션, Enemy AI 등을 처음으로 접한 게임입니다. 모든 코드는
                에셋없이 직접 제작하였습니다.
              </p>
              <img
                className={styles.about1}
                src={imageData.HIM_Title_img.imageUrl}
              />
            </div>
            <div className={styles.content1}>
              <img
                className={styles.about1}
                src={imageData.TGB_Title_img.imageUrl}
              />
              <p className={styles.content_text}>
                <b>Skul: The Hero Slayer</b>에 영감을 받아 만든 1인 개발한 2D
                Platformer Roguelike 게임인 <b>The Greatest Blacksmith</b>
                입니다.
                <br /> 게임을 개발하는 과정이 마치 대장간에서 제련하는
                대장장이와 같다는 생각으로 시작하였습니다. 제작 당시 얻을 수
                있는 리소스를 기반으로 줄거리를 구성하였고 훈련기관 당시
                역기획한 Skul에 영감을 받아 플레이스타일을 정했습니다. 2D 도트
                그래픽, 훌륭한 타격감을 구현하고자 리소스 세팅과 코드는 모두
                직접 구현하였습니다.
              </p>
            </div>
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

export default About;
