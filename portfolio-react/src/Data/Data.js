const images = require.context("../Images/", false, /\.(png|jpg|gif)$/);
const imageData = {
  TGB_Title_img: {
    imageUrl: images("./TGB_Title.png"),
    altText: "HIM_Title_img",
  },
  TGB_Title_Text_img: {
    imageUrl: images("./TGB_Text_img.png"),
    altText: "TGB_Text_img",
  },
  HIM_Title_img: {
    imageUrl: images("./HIM_Title.png"),
    altText: "HIM_Title_img",
  },
  PeaceMaker_Title_img: {
    imageUrl: images("./PeaceMaker_Title.png"),
    altText: "PeaceMaker_Title_img",
  },
  Unity_Img: {
    imageUrl: images("./U_Logo_Black_RGB.png"),
    altText: "Unity_Img",
  },
};

const linkData = {
  TGB_Download: {
    linkUrl:
      "https://www.dropbox.com/scl/fi/5ce8135szgsmxv08ax3i7/TGB_build.exe?rlkey=8ic8glddtv6nyyc40vrnn52az&dl=0",
    linkText: "HIM 게임 인스톨러 빌드 파일",
  },
  TGB_Video: {
    linkUrl: "https://www.youtube.com/watch?v=gghV7XPoSxE&ab_channel=Dev_KDH",
    linkText: "HIM 플레이 영상",
  },
  HIM_Download: {
    linkUrl:
      "https://www.dropbox.com/scl/fi/h1u2ug3lizfh7dzbuomtt/HIM_buildfile.exe?rlkey=96x9o3gcv3ensu3buq4s13yoj&dl=0",
    linkText: "HIM 게임 인스톨러 빌드 파일",
  },
  HIM_Video: {
    linkUrl: "https://www.youtube.com/watch?v=gghV7XPoSxE&ab_channel=Dev_KDH",
    linkText: "HIM 플레이 영상",
  },
  PeaceMaker_Video: {
    linkUrl: "https://www.youtube.com/watch?v=ixFyweC7xUc&ab_channel=Dev_KDH",
    linkText: "PeaceMaker 플레이 영상",
  },
  self_introduction: {
    linkUrl: "https://www.youtube.com/watch?v=ixFyweC7xUc&ab_channel=Dev_KDH",
    linkText: "자기소개서 다운로드 링크",
  },
};

export { imageData, linkData };
