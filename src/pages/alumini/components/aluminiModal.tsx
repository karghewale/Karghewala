import Modal from "../../../components/modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: AluminiResponseType;
};

const AluminiModal = ({isOpen, onClose, data}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div>
          <img src={data?.image} alt="Profile Photo" />
          <div>
            <div>
              <h2>{data?.name}</h2>
              <p>{data?.age}</p>
              <p>₹{data?.salary}/month</p>
              <p>Avg. sale rate ₹{data?.sale_rate}/month</p>
            </div>
            <p>{data?.description}</p>
          </div>
        </div>
        {data?.photos.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="Photos of the Alumini"
          />
        ))}
      </div>
    </Modal>
  );
};

export default AluminiModal;
