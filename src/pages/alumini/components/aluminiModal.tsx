import Modal from "../../../components/modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AluminiModal = ({isOpen, onClose}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      Hello World
    </Modal>
  );
};

export default AluminiModal;
