import React from 'react';
import SearchBar from './Searchbar';
import campus1 from '../assets/campus1.webp';
import campus2 from '../assets/campus2.webp';
import campus3 from '../assets/campus3.webp';
import styles from './ProgramSearch.module.css';

const ProgramSearch = () => {
  return (
    <section className={styles.programSearchSection}>
      <header className={styles.programSearchHeader}>
        <h1>Explore Our Programs</h1>
        <p>Find the perfect program for your future</p>
      </header>
      
      <SearchBar />
      
      <div className={styles.programList}>
        <div className={styles.programCard}>
          <h3>Program 1</h3>
          <p>Description for program 1</p>
          <img src={campus1} alt="Program 1" />
        </div>
        <div className={styles.programCard}>
          <h3>Program 2</h3>
          <p>Description for program 2</p>
          <img src={campus2} alt="Program 2" />
        </div>
        <div className={styles.programCard}>
          <h3>Program 3</h3>
          <p>Description for program 3</p>
          <img src={campus3} alt="Program 3" />
        </div>
      </div>
    </section>
  );
};

export default ProgramSearch;