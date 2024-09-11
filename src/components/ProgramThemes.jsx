import React from 'react';
import styles from './ProgramThemes.module.css';

const ProgramThemes = () => {
  return (
    <div className={styles.programThemes}>
      <h1>Discover programs by theme</h1>
      <p>
        Unsure where to begin? Explore curated groups of schools and learn more
        about specific degrees and their career outcomes.
      </p>
      {/* <div className={styles.tabs}>
        <span className={styles.activeTab}>Undergraduate</span>
        <span>Graduate</span>
      </div> */}
      <div className={styles.themeCards}>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h3>Budget Friendly</h3>
          <p>Pursue a top-ranked degree without compromising your budget</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h3>Computer Science</h3>
          <p>Explore computer science degrees and careers</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h3>Engineering</h3>
          <p>Pursue a range of engineering degrees at these top schools</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h3>Health Care, Nursing, Premed</h3>
          <p>Explore a diverse range of health care and medical degrees</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h3>STEM</h3>
          <p>
            In-demand skills, high earnings, and career flexibility start with STEM programs
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h3>Transfer Friendly Schools</h3>
          <p>Transfer-Friendly Schools for International Students</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramThemes;