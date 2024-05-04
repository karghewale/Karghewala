import Marquee from "react-fast-marquee";
import Modal from "../../../components/modal";
import styles from "../index.module.css";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: AluminiResponseType;
};

const AluminiModal = ({ isOpen, onClose, data }: Props) => {
  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    gradient: false,
    speed: 30,
    drag: true,
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.individual}>
        <div className={styles.content}>
          <img src={data?.image} alt="Profile Photo" />
          <div>
            <div>
              <h2>
                {data?.name},<p>{data?.age}</p>
              </h2>
              {"["}
              <p>
                <p>₹{data?.salary}/month</p>
                <p>Avg. sale rate ₹{data?.sale_rate}/month</p>
              </p>
              {"]"}
            </div>
            <p>{data?.description}</p>
          </div>
        </div>
        <div style={{width:"100%",overflow:"hidden"}}>
          <Marquee
            {...marqParams}
            style={{ width: "100vw" }}
            className={styles.imgwrapper}
          >
            {data?.photos.map((item, index) => (
              <img key={index} src={item} alt="Photos of the Alumini" />
            ))}
          </Marquee>
        </div>
      </div>
    </Modal>
  );
};

export default AluminiModal;
