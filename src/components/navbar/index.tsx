import styles from "./index.module.css";
import logo from "/Logo.jpg";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
type Props = {};

export const Navbar = (_props: Props) => {
  const [openmenu, setopenmenu] = useState(false);
  const [navbg, setNavBg] = useState(false);
  const navigate = useNavigate();
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const navContent = ["HOME", "WORKS", "SERVICES", "ABOUT"];
  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setopenmenu(!openmenu);
    }
  };

  const renderLinks = (value: string) => {
    navigate(`/${value}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={styles.navbarWrapper}
      style={{
        background: navbg ? "rgba(255,255,255,1)" : "rgba(255,255,255,1)",
      }}
    >
      <div className={styles.navbarLeft}>
        <button onClick={() => navigate("/home")}>
          <img
            className={`${styles.logo} ${navbg ? " " : styles.hidden}`}
            src={logo}
            alt="logo"
          />
        </button>
      </div>
      <div className={styles.navbarRight}>
        <div>
          {navContent.map((content, i) => (
            <button
              key={i}
              onClick={() => renderLinks(`/${content.toLowerCase()}`)}
            >
              <p
                className={
                  window.location.pathname.includes(content.toLowerCase())
                    ? styles.activeLink
                    : styles.link
                }
              >
                {content}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.navbarMobile}>
        <button className={styles.menuMd} onClick={openMenu}>
          <MdMenu />
        </button>
        {openmenu && (
          <div>
            <button className={styles.menuMd} onClick={openMenu}>
              <IoMdClose />
            </button>
            {navContent.map((content, i) => (
              <button
                key={i}
                onClick={() => renderLinks(`/${content.toLowerCase()}`)}
              >
                <p
                  className={
                    window.location.pathname.includes(content.toLowerCase())
                      ? styles.activeLink
                      : styles.link
                  }
                >
                  {content}
                </p>
              </button>
            ))}
            <button className={styles.StudyButton} onClick={scrollToContact}>
              CONTACT
            </button>
          </div>
        )}
      </div>{" "}
      <button className={styles.StudyButton} onClick={scrollToContact}>
        CONTACT
      </button>
    </div>
  );
};
