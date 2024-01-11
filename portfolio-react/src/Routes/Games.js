import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Games.module.css";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

import { imageData, linkData } from "../Data/Data"; // 경로는 실제 파일 위치에 따라 수정

function Games() {
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
      text: "PeaceMaker",
      img: imageData.PeaceMaker_Title_img.imageUrl,
      href: linkData.PeaceMaker_Video.linkUrl,
      descript:
        "첫 팀 프로젝트 과제로 제작한 PeaceMaker입니다. 클래시오브클랜같은 전략 디펜스 게임을 목표로 제작되었습니다. ",
      subItmes: [
        {
          idx: 0,
          img: imageData.PeaceMaker_Descript1_img.imageUrl,
          text: "팀 프로젝트의 게임 화면 구성도 입니다. 각 팀별로 다른 부분은 구현 후 머지하는 방식으로 진행되었습니다.",
        },
        {
          idx: 1,
          img: imageData.PeaceMaker_Descript2_img.imageUrl,
          text: "제가 맡은 부분은 대전 상대 선택 화면 입니다. 대전 상대의 정보와 현재 나의 공격 덱 상태 등 여러 정보를 서버와 통신하여 검색하고 인게임(전투)에 넘겨주는 역할을 하는 씬입니다.",
        },
        {
          idx: 2,
          img: imageData.PeaceMaker_Descript3_img.imageUrl,
          text: "제작 시 짧은 개발 기간과 인원이탈로 인해 어려움이 많았습니다. 학원생들로만 구성되었기 때문에 경험 또한 부족했습니다. 하지만 강사님께서 리소스와 도움을 주셔서 주어진 기간내에 잘 마무리 할 수 있었습니다.",
        },
      ],
    },
    {
      idx: 1,
      text: "HIM",
      img: imageData.HIM_Title_img.imageUrl,
      href: linkData.HIM_Video.linkUrl,
      descript:
        "아웃라스트, 바이오하자드같은 1인칭 스릴러 게임을 생각하고 처음으로 1인 개발한 공포 게임인 HIM입니다. Draw Call, Object Pooling, 캐릭터의 움직임과 적의 이동 동선 및 애니메이션, Enemy AI 등을 처음으로 접한 게임입니다. 모든 코드는 에셋없이 직접 제작하였습니다.",
      subItmes: [
        {
          idx: 0,
          img: imageData.HIM_Descript1_img.imageUrl,
          text: "PC플레이를 목표로 제작했기 때문에 키보드의 키 세팅을 위한 기능과 마우스 감도 설정 기능이 있습니다.",
        },
        {
          idx: 1,
          img: imageData.HIM_Descript2_img.imageUrl,
          text: "게임의 대략적인 줄거리와 플레이 방법을 설명해 주는 UI입니다. 플레이어는 오른쪽 상단에 3개의 열쇠를 모아 처음 스폰된 장소의 탈출구로 탈출하는 것이 목표입니다.",
        },
        {
          idx: 2,
          img: imageData.HIM_Descript3_img.imageUrl,
          text: "첫 번째 열쇠를 찾게되면 맵 2층 중앙에 플레이어를 공격하는 NPC가 스폰되게 됩니다. NPC는 기본적으로 맵에 배치된 Path를 통해 움직이고 플레이어가 움직일 때나는 발소리를 감지하여 해당 위치로 추적하며, RayCast로 플레이어를 발견 시 추적상태로 전환되어 일정 범위안에 들어온다면 공격하는 알고리즘입니다.",
        },
        {
          idx: 3,
          img: imageData.HIM_Descript4_img.imageUrl,
          text: "NPC의 공격과 추적을 따돌리고 처음 게임 시작 지점의 탈출구를 통해 탈출할 수 있습니다. 맵의 크기가 생각보다 크지 않은 점과 NPC의 속도, 플레이어 추적 알고리즘 등을 고려하여 배터리 소모 속도를 증가시키고 화면의 밝기를 낮추는 등 여러 방식으로 레벨디자인을 하였습니다.",
        },
      ],
    },
    {
      idx: 2,
      text: "TGB",
      img: imageData.TGB_Title_img.imageUrl,
      href: linkData.TGB_Video.linkUrl,
      descript:
        "Skul: The Hero Slayer 에 영감을 받아 만든 1인 개발한 2D Platformer Roguelike 게임인 The Greatest Blacksmith 입니다. 게임을 개발하는 과정이 마치 대장간에서 제련하는 대장장이와 같다는 생각으로 시작하였습니다. 제작 당시 얻을 수 있는 리소스를 기반으로 줄거리를 구성하였고 훈련기관 당시 역기획한 Skul에 영감을 받아 플레이스타일을 정했습니다. 2D 도트 그래픽, 훌륭한 타격감을 구현하고자 리소스 세팅과 코드는 모두 직접 구현하였습니다.",
      subItmes: [
        {
          idx: 0,
          img: imageData.TGB_Descript1_img.imageUrl,
          text: "InputSystem을 이용한 키 바인딩, Interaction과 키 리바인딩 등 여러 기능을 사용할 수 있도록 구현했습니다. 여러 ActionMap을 사용하여 특정 상황에 맞춰 ActionMap을 전환함으로써 편리성을 높혔습니다.",
        },
        {
          idx: 1,
          img: imageData.TGB_Descript2_img.imageUrl,
          text: "게임 시작 후 제일 처음보게되는 컷씬의 경우 PlayableDirector를 사용하여 컷씬을 제작하였습니다. ",
        },
        {
          idx: 2,
          img: imageData.TGB_Descript3_img.imageUrl,
          text: "각 스테이지마다 다형성을 구현하기위해 StageMananger는 씬에 귀속되고 플레이어도 씬 변경 시 새로 생성 되게됩니다. 플레이중이던 정보는 DataManager에서 관리하여 전달하고 DataParsing을 통해 데이터를 Json으로 저장 및 추출하게 됩니다. 그러므로 게임 도중 게임을 종료해도 해당 씬에서 이어서 시작할 수 있고, 아이템을 스폰하는 등 여러 랜덤 요소 또한 변수로 저장되어 높은 아이템을 뽑기위해 씬을 재시작하여도 같은 결과가 나오도록 구현했습니다.",
        },
        {
          idx: 3,
          img: imageData.TGB_Descript4_img.imageUrl,
          text: "플레이어나 적의 WeaponData는 WeaponGenerator를 통해 관리되며 여러 기능을 가집니다. WeaponCommandData에는 WeaponData와 WeaponAnim이 같이 있어야 작동하며 Weapon Anim에 설정한 Animation Event로 설정한 함수에 WeaponData값을 인수로 작동하게 됩니다.",
        },
        {
          idx: 4,
          img: imageData.TGB_Descript5_img.imageUrl,
          text: "WeaponData에는 Sprite, HitBox, Effect, Sounds 등 여러 해당 Anim에 대해 구현한 값이 저장되며 ScriptObject로 관리하게됩니다. 설정에 따라 기본 공격, 스킬 등 여러 기능을 구현할 수 있었습니다.",
        },
        {
          idx: 5,
          img: imageData.TGB_Descript6_img.imageUrl,
          text: "게임에는 설명하지 못한 여러 기능들이 구현되어 있습니다. 버프, 무기 재련, 아이템 이벤트 효과, 스킬, 아이템 판매 등 여러 플랫포머 기능들이 구현되어 있습니다. 직접 플레이 및 플레이 영상을 통해 즐겨보시길 바랍니다. 감사합니다.",
        },
      ],
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
            <h2>Games</h2>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.go_top_wrapper}>
          <section className={styles.subpage_container}>
            <p className={styles.section_title}>게임</p>
            <p className={styles.main_content}>
              <b>팀 프로젝트 및 1인 개발한 작품들을 소개하겠습니다.</b>
            </p>
            <p className={styles.main_content}> </p>
            {SectionItems.map((Item, index) => (
              <div>
                <div className={styles.subtitle} id={Item.text}>
                  <a href={Item.href}>
                    <img className={styles.section_img} src={Item.img} />
                  </a>
                </div>
                <p className={styles.main_content}>
                  <b>
                    {Item.idx + 1}. {Item.text}
                  </b>
                  <br />
                  <br />
                  {Item.descript}
                </p>
                {Item.subItmes.map((subitem, subindex) => (
                  <>
                    {subindex % 2 === 0 ? (
                      <>
                        <div className={styles.content1}>
                          <img
                            className={styles.about1}
                            src={subitem.img}
                            alt={subitem.img}
                          />
                          <p className={styles.content_text}>{subitem.text}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles.content2}>
                          <p className={styles.content_text}>{subitem.text}</p>

                          <img
                            className={styles.about1}
                            src={subitem.img}
                            alt={subitem.img}
                          />
                        </div>
                      </>
                    )}
                  </>
                ))}
                <p className={styles.main_content}> </p>
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

export default Games;
