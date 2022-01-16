import styles from "../styles/Modal.module.css";

interface Props {
  setShowModal: (showModal: boolean) => void;
}
const Modal = ({ setShowModal }: Props) => (
  <div className={styles.overlay}>
    <div className={styles.modal}>
      <div className={styles.header}>
        <a
          href="#"
          onClick={() => {
            setShowModal(false);
          }}
          data-testid="close-icon"
        >
          x
        </a>
      </div>
      <p className={styles.success}>Success</p>
    </div>
  </div>
);
export default Modal;
