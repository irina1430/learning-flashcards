import styles from "./LoadingItem.module.scss";

const LoadingItem = () => {
  return (
    <div className={styles.kartLoader}>
      <div className={styles.sheath}>
        <div className={styles.segment}></div>
      </div>
      <div className={styles.sheath}>
        <div className={styles.segment}></div>
      </div>
      <div className={styles.sheath}>
        <div className={styles.segment}></div>
      </div>
      <div className={styles.sheath}>
        <div className={styles.segment}></div>
      </div>
      <div className={styles.sheath}>
        <div className={styles.segment}></div>
      </div>
      <div className={styles.sheath}>
        <div className={styles.segment}></div>
      </div>
      <div className={styles.sheath}>
        <div className={styles.segment}></div>
      </div>
      <div className={styles.sheath}>
        <div className={styles.segment}></div>
      </div>
      <div className={styles.sheath}>
        <div className={styles.segment}></div>
      </div>
    </div>
  );
};

export default LoadingItem;
