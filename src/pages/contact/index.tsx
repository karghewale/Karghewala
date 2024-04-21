import { Instagram, LinkedIn, LocationSvg, Youtube } from "../../components/footer/svg";
import { HeaderComponent } from "../../components/headerComponent";
import styles from "./index.module.css";

type Props = {};

export const Contact = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors="#95797c" />
      <div className={styles.header}>
        <h3>CONTACT US</h3>
        <p>
          Come alongside us in our endeavor to empower artisans and strengthen
          the craft sector, celebrating creativity and sustaining livelihoods.
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="i.e. John Doe" />
        </div>{" "}
        <div>
          <label htmlFor="name">Email</label>
          <input type="email" placeholder="i.e. john@mail.com" />
        </div>{" "}
        <div>
          <label htmlFor="name">Organization/Profession</label>
          <input type="text" placeholder="Karghewale" />
        </div>
        <div>
          <label htmlFor="preferredLanguage">Preferred Language:</label>
          <select name="preferredLanguage" id="preferredLanguage">
            <option value="hindi" selected>
              Hindi
            </option>
            <option value="english">English</option>
            <option value="malayalam">Malayalam</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Purpose of involvement</label>
          <textarea placeholder="Message" />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      <div className={styles.locate}>
        <h2>locate US</h2>
        <div>
          <div>
            <div>
              <LocationSvg />
              <p>Loomers India Private Limited</p>
            </div>
            <p>
              Juna Bazar, Ram Mandir Marg, Gali no. 2, Ward no. 14, Maheshwar,
              Dist. Khargone, Madhya Pradesh 451224, India
            </p>
            <div>
              <p>General Enquiries:</p>
              <a href="tel:+91 95895 42217">+91 95895 42217</a>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9812.069278507659!2d73.84791534614205!3d18.52574822765212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0616f0a2469%3A0x32aa1d556c044c27!2sJuna%20Bazar%2C%20Kasba%20Peth%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713724618940!5m2!1sen!2sin"
            allowFullScreen={undefined}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={styles.socials}>
        <h2>SOCIALS</h2>
        <div>
          <a>
            <LinkedIn />
            <p>Linkedin</p>
          </a>{" "}
          <a>
            <Instagram />
            <p>Instagram</p>
          </a>{" "}
          <a>
            <Youtube />
            <p>Youtube</p>
          </a>
        </div>
      </div>
    </div>
  );
};
