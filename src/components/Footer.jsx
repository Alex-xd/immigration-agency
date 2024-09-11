import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h2>SHORELIGHT</h2>
          <p>Helping international students study at top US universities</p>
          <div className={styles.socialIcons}>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <h3>Students</h3>
            <ul>
              <li>Undergraduate</li>
              <li>Graduate</li>
              <li>Services</li>
              <li>Stories</li>
              <li>Events</li>
              <li>All Universities</li>
            </ul>
          </div>

          <div>
            <h3>Working with Us</h3>
            <ul>
              <li>Counselors</li>
              <li>Universities</li>
              <li>Updates</li>
              <li>Events</li>
              <li>Downloads</li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>News & Insights</li>
              <li>Diversity, Equity & Inclusion</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Also of Interest: Intensive English Programs | Career Development | Research & Resources</p>
        <p>© 2024 Shorelight | Terms of Service | Privacy & Cookie Notice | Ethics Hotline | Recruitment Terms</p>
      </div>
    </footer>
  );
};

export default Footer;