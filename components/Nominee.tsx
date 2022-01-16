import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/Nominee.module.css";

export interface NomineeProps {
  title: string;
  photoUrL: string;
  id: string;
  isSelectedNominee?: boolean;
  category: string;
  isSelectedCategory?: boolean;
  updateSelectedNominees: (
    selectedCategory: string,
    selectedNominee: string
  ) => void;
}

const Nominee = ({
  title,
  photoUrL,
  isSelectedNominee,
  updateSelectedNominees,
  category,
  isSelectedCategory,
}: NomineeProps) => {
  return (
    <span
      className={classNames(
        styles.card,
        isSelectedNominee && styles.selectedCard
      )}
    >
      <span className={styles.title}>{title}</span>
      <Image
        width="100px"
        height="100px"
        src={photoUrL}
        alt={`picture of ${title}`}
        className={styles.logo}
      />
      <button
        className={styles.select}
        onClick={() => {
          updateSelectedNominees(category, title);
        }}
        disabled={isSelectedCategory ? !isSelectedNominee : false}
        data-testid="select-button"
      >
        {isSelectedNominee ? "Unselect" : "Select"}
      </button>
    </span>
  );
};

export default Nominee;
