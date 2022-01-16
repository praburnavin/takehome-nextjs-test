import { useState } from "react";
import Modal from "./Modal";
import styles from "../styles/Ballot.module.css";
import Nominee, { NomineeProps } from "./Nominee";

interface Ballot {
  title: string;
  items: Array<NomineeProps>;
  id?: string;
  isSelectedAward?: boolean;
}

interface Props {
  ballotsData: Array<Ballot>;
}

const Ballot = ({ ballotsData }: Props) => {
  const [ballots, setBallots] = useState(ballotsData);
  const [showModal, setShowModal] = useState(false);

  const updateSelectedNominee = (
    selectedAward: string,
    selectedNominee: string
  ): void => {
    const selectedNominees = ballots.map((award) => {
      const { title, items: nominees, isSelectedAward = false } = award;

      if (title === selectedAward) {
        const selectedItems = nominees.map((nominee) => {
          const { title, isSelectedNominee } = nominee;
          return title === selectedNominee
            ? { ...nominee, isSelectedNominee: !isSelectedNominee }
            : nominee;
        });
        return {
          ...award,
          isSelectedAward: !isSelectedAward,
          items: selectedItems,
        };
      }
      return award;
    });

    setBallots(selectedNominees);
  };

  const handleSubmit = () => {
    setShowModal(true);
    const selectedNominees = ballots.map(({ items }) =>
      items.filter(({ isSelectedNominee }) => isSelectedNominee)
    );
    console.log({ selectedNominees });
  };

  const handleModal = () => {
    setShowModal(false);
    setBallots(ballotsData);
  };

  return (
    <div className={styles.ballot}>
      <h1 className={styles.title}>AWARDS 2021</h1>
      {ballots?.map(({ title, items, isSelectedAward = false }) => {
        return (
          <div key={title}>
            <div className={styles.grid}>
              <span className={styles.category}>{title}</span>
              {items.map((item) => {
                return (
                  <Nominee
                    {...item}
                    award={title}
                    isSelectedAward={isSelectedAward}
                    updateSelectedNominees={updateSelectedNominee}
                    key={item?.title}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      <div className={styles.submitSection}>
        <div className={styles.submit}>
          <button className={styles.submitButton} onClick={handleSubmit}>
            <span>SUBMIT BALLOT BUTTON</span>
          </button>
        </div>
      </div>

      {showModal && <Modal handleModal={handleModal} />}
    </div>
  );
};

export default Ballot;
