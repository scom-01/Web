import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { imageData, linkData } from "../Data/Data"; // 경로는 실제 파일 위치에 따라 수정

function Nav() {
  const [scrollTop, setScrollTop] = useState(false);
  const [screenWidth, setScreenWidth] = useState(true);
  const [LangKR, setLangKR] = useState(true);
  const location = useLocation();
  const pathName = location.pathname;
  const updateScroll = () => {
    if (window.scrollY <= 50) {
      setScrollTop(true);
    } else setScrollTop(false);
  };
  const updateScreenWidth = () => {
    if (window.innerWidth >= 1420) setScreenWidth(true);
    else setScreenWidth(false);
  };

  const updateLang = () => {
    setLangKR((pre) => !pre);
  };
  useEffect(() => {
    window.addEventListener(`scroll`, updateScroll);
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener(`scroll`, updateScroll);
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const menuItems = [
    {
      text: "about",
      href: "/About",
      subLinks: [{ text: "me", href: "/About" }],
    },
    {
      text: "games",
      href: "/Games",
      subLinks: [
        { text: "TGB", href: "/Games/TGB" },
        { text: "HIM", href: "/Games/HIM" },
        { text: "Peacemaker", href: "/neowiz/games/mobile?list" },
      ],
    },
    {
      text: "media",
      href: "/Media",
      subLinks: [
        { text: "TGB", href: linkData.TGB_Video.linkUrl },
        { text: "HIM", href: linkData.HIM_Video.linkUrl },
        {
          text: "Peacemaker",
          href: linkData.PeaceMaker_Video.linkUrl,
        },
      ],
    },
    { text: "contact me", href: "/neowiz/contact-us" },
  ];

  return (
    <div className={styles.Nav}>
      <div
        className={`${
          pathName === "/" && scrollTop
            ? styles.Nav_top_true
            : styles.Nav_top_false
        }`}
      >
        <Link to={"/"} className={styles.Nav__logo} color="black">
          <span>Home</span>
        </Link>
        {screenWidth && (
          <div className={styles.Nav__menu}>
            {menuItems.map((menuItem) => (
              <li key={menuItem.text} className={styles.Nav_link}>
                <Link to={menuItem.href}>
                  <span>{menuItem.text}</span>
                </Link>
                {menuItem.subLinks && (
                  <ul className={styles.Nav__submenu}>
                    {menuItem.subLinks.map((subLink) => (
                      <li key={subLink.text}>
                        <Link to={subLink.href}>
                          <span>{subLink.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </div>
        )}
        <div className={styles.underline}></div>
        {screenWidth ? (
          <div className={styles.Nav_lang}>
            <a
              className={`${LangKR ? styles.on : styles.off}`}
              onClick={!LangKR ? updateLang : undefined}
            >
              KR
            </a>
            <b style={{ color: "black" }}>|</b>
            <a
              className={`${!LangKR ? styles.on : styles.off}`}
              onClick={LangKR ? updateLang : undefined}
            >
              EN
            </a>
          </div>
        ) : (
          <div className={styles.Nav__hambuger}>햄버거</div>
        )}
        <div className={styles.Nav__hiden}></div>
      </div>
    </div>
  );
}

export default Nav;
