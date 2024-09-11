import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.servicesSection}>
      <h1>Our Services</h1>
      <p>
        Our range of services help ambitious International students study abroad and launch successful careers.
      </p>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceCard}>
          <h2>01 Research</h2>
          <p>
            With Shorelight research services, discover top-ranked universities, gain exclusive insights from peers, and connect with expert counselors.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h2>02 Admissions</h2>
          <p>
            Shorelight advisors guide you through a simplified college application process with fast turnaround for admissions decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;