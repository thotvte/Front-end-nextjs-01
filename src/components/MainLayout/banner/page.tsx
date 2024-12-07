import React from "react";
import styles from "./Banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <span className={`${styles.bannerItem} ${styles.hotBanner}`}>
        Hot nhất tháng này
      </span>
      <span className={`${styles.bannerItem} ${styles.upcomingBanner}`}>
        Sắp diễn ra 21:00 - 23:59
      </span>
    </div>
  );
};

export default Banner;
