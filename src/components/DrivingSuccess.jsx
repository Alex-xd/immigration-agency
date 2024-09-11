import React from 'react';
import styles from './DrivingSuccess.module.css';

const DrivingSuccess = () => {
  return (
    <div className={styles.successSection}>
      <div className={styles.circle}>
        <p>Trusted Experts</p>
        <h2>Driving Student Success</h2>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <h3>500,000+</h3>
          <p>applications processed</p>
        </div>
        <div className={styles.stat}>
          <h3>500+</h3>
          <p>employees across 25 countries</p>
        </div>
        <div className={styles.stat}>
          <h3>31,000+</h3>
          <p>students enrolled</p>
        </div>
      </div>
    </div>
  );
};

export default DrivingSuccess;