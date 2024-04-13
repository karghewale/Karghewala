import styles from "./index.module.css";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationSvg,
  MailSvg,
  PhoneSvg,
  Twitter,
  Youtube,
} from "./svg";
import Logo from "/Logo.jpg";

type Props = {};

export const Footer = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <div>
          <img src={Logo} alt="" />
          <p>
            This talented community of young and aspiring weaver entrepreneurs,
            so that they can build robust businesses.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <div>
            <a href="">Our Story</a>
            <a href="">Contact Us</a>
            <a href="">Gallery</a>
            <a href="">Training</a>
          </div>
        </div>
        <div>
          {" "}
          <h3>Navigation</h3>
          <div>
            <a href="">About Karghewale</a>
            <a href="">Our Advisors</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
        <div>
          <h3>Get in Touch</h3>
          <div>
            <div>
              <PhoneSvg />
              <p>+91 95895 422173</p>
            </div>
            <div>
              <MailSvg />
              <p>contact@karghewale.com</p>
            </div>
            <div>
              <LocationSvg />
              <p>
                Juna Bazar, Ram Mandir Marg, Gali no. 2, Ward no. 14, Maheshwar,
                Dist.: Khargone, Madhya Pradesh 451224, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          Copyright © 2024 Karghewale Foundation. All Rights Reserved | Design
          by&nbsp;
          <a href="fundesign.in" target="_blank">Fun Designs</a>
        </p>
        <div>
          <a href="">
            <Facebook />
          </a>
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <Youtube />
          </a>{" "}
          <a href="">
            <Twitter />
          </a>{" "}
          <a href="">
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
};
