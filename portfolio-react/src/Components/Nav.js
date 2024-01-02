import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Nav() {
  const [scrollTop, setScrollTop] = useState(false);
  const [screenWidth, setScreenWidth] = useState(true);
  const [LangKR, setLangKR] = useState(true);

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
      href: "/neowiz/about",
      subLinks: [
        { text: "we are", href: "/neowiz/about#we" },
        { text: "연혁", href: "/neowiz/about#history" },
      ],
    },
    {
      text: "games",
      href: "/Games",
      subLinks: [
        { text: "전체", href: "/neowiz/games/all" },
        { text: "PC", href: "/neowiz/games/pc?list" },
        { text: "모바일", href: "/neowiz/games/mobile?list" },
        { text: "콘솔", href: "/neowiz/games/console?list" },
        { text: "신규", href: "/neowiz/games/new?list" },
      ],
    },
    {
      text: "media",
      href: "/Media",
      subLinks: [
        { text: "TGB", href: "/neowiz/media/press?page=1&size=10" },
        { text: "네오위즈 NOW", href: "/neowiz/media/story?page=1&size=9" },
      ],
    },
    {
      text: "carreers",
      href: "/careers",
      subLinks: [
        { text: "CAREERS", href: "/neowiz/careers" },
        { text: "진행 중인 공고", href: "/neowiz/careers/recruit" },
      ],
    },
    { text: "contact me", href: "/neowiz/contact-us" },
  ];

  return (
    <div className={styles.Nav}>
      <div
        className={`${scrollTop ? styles.Nav_top_true : styles.Nav_top_false}`}
      >
        <Link to={"/"} className={styles.Nav__logo} color="black">
          <span>Top</span>
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
              className={`${LangKR ? styles.on : ""}`}
              onClick={!LangKR ? updateLang : undefined}
            >
              KR
            </a>
            <b style={{ color: "black" }}>|</b>
            <a
              className={`${!LangKR ? styles.on : ""}`}
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
