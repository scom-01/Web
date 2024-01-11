const images = require.context("../Images/", false, /\.(png|jpg|gif)$/);
const imageData = {
  PeaceMaker_Title_img: {
    imageUrl: images("./PeaceMaker_Title.png"),
    altText: "PeaceMaker_Title_img",
  },
  PeaceMaker_Descript1_img: {
    imageUrl: images("./PeaceMaker_Descript1.png"),
    altText: "PeaceMaker_Descript1_img",
  },
  PeaceMaker_Descript2_img: {
    imageUrl: images("./PeaceMaker_Descript2.png"),
    altText: "PeaceMaker_Descript2_img",
  },
  PeaceMaker_Descript3_img: {
    imageUrl: images("./PeaceMaker_Descript3.png"),
    altText: "PeaceMaker_Descript3_img",
  },
  HIM_Title_img: {
    imageUrl: images("./HIM_Title.png"),
    altText: "HIM_Title_img",
  },
  HIM_Descript1_img: {
    imageUrl: images("./HIM_Descript1.png"),
    altText: "HIM_Descript1_img",
  },
  HIM_Descript2_img: {
    imageUrl: images("./HIM_Descript2.png"),
    altText: "HIM_Descript2_img",
  },
  HIM_Descript3_img: {
    imageUrl: images("./HIM_Descript3.png"),
    altText: "HIM_Descript3_img",
  },
  HIM_Descript4_img: {
    imageUrl: images("./HIM_Descript4.png"),
    altText: "HIM_Descript4_img",
  },
  TGB_Title_img: {
    imageUrl: images("./TGB_Title.png"),
    altText: "TGB_Title_img",
  },
  TGB_Title_Text_img: {
    imageUrl: images("./TGB_Text_img.png"),
    altText: "TGB_Text_img",
  },
  TGB_Descript1_img: {
    imageUrl: images("./TGB_Descript1.png"),
    altText: "TGB_Descript1_img",
  },
  TGB_Descript2_img: {
    imageUrl: images("./TGB_Descript2.png"),
    altText: "TGB_Descript2_img",
  },
  TGB_Descript3_img: {
    imageUrl: images("./TGB_Descript3.png"),
    altText: "TGB_Descript3_img",
  },
  TGB_Descript4_img: {
    imageUrl: images("./TGB_Descript4.png"),
    altText: "TGB_Descript4_img",
  },
  TGB_Descript5_img: {
    imageUrl: images("./TGB_Descript5.png"),
    altText: "TGB_Descript5_img",
  },
  TGB_Descript6_img: {
    imageUrl: images("./TGB_Descript6.png"),
    altText: "TGB_Descript6_img",
  },
  Unity_Img: {
    imageUrl: images("./U_Logo_Black_RGB.png"),
    altText: "Unity_Img",
  },
};

const linkData = {
  TGB_Download: {
    linkUrl:
      "https://www.dropbox.com/scl/fi/rcfzj0ct829xgfcxkaxhh/TGB_build.exe?rlkey=06mdkcgcodheqsnammhg3sas7&dl=0",
    linkText: "TGB 게임 인스톨러 빌드 파일",
  },
  TGB_Video: {
    linkUrl: "https://youtu.be/29iHaTucYw4",
    linkText: "TGB 플레이 영상",
  },
  HIM_Download: {
    linkUrl:
      "https://www.dropbox.com/scl/fi/9yenr4bllu2d3fit51sna/HIM_buildfile.exe?rlkey=ojsj3w2dqiulyu55jszm537gl&dl=0",
    linkText: "HIM 게임 인스톨러 빌드 파일",
  },
  HIM_Video: {
    linkUrl: "https://youtu.be/gghV7XPoSxE",
    linkText: "HIM 플레이 영상",
  },
  PeaceMaker_Video: {
    linkUrl: "https://youtu.be/ixFyweC7xUc",
    linkText: "PeaceMaker 플레이 영상",
  },
  self_introduction: {
    linkUrl:
      "https://www.dropbox.com/scl/fi/l3unq7ckizzlggw94l7jg/_.pdf?rlkey=vgewwqe4r1dixz2rsvuixldvz&dl=0",
    linkText: "자기소개서 다운로드 링크",
  },
};

export { imageData, linkData };
