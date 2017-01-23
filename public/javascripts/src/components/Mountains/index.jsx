import styles from './styles.css';
import React from 'react';

const Mountains = () => {
  return(
    <div>
      <div className={styles["mountain"]}>
        <div className={styles["mountain-top"]}>
          <div className={styles["mountain-cap-1"]}></div>
          <div className={styles["mountain-cap-2"]}></div>
          <div className={styles["mountain-cap-3"]}></div>
        </div>
      </div>
      <div className={styles["mountain-two"]}>
        <div className={styles["mountain-top"]}>
          <div className={styles["mountain-cap-1"]}></div>
          <div className={styles["mountain-cap-2"]}></div>
          <div className={styles["mountain-cap-3"]}></div>
        </div>
      </div>
       <div className={styles["mountain-three"]}>
        <div className={styles["mountain-top"]}>
          <div className={styles["mountain-cap-1"]}></div>
          <div className={styles["mountain-cap-2"]}></div>
          <div className={styles["mountain-cap-3"]}></div>
        </div>
      </div>
      <div className={styles.cloud}></div>
    </div>
  )
}

export default Mountains;
