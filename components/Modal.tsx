import styles from "../styles/Modal.module.css";

interface Props {
  handleModal: () => void;
}
const Modal = ({ handleModal }: Props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span
          className={styles.header}
          onClick={handleModal}
          data-testid="close-icon"
        >
          x
        </span>
        <p className={styles.success}>Success</p>
      </div>
    </div>
  );
};
export default Modal;
