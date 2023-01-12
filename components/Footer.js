import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <h4>Get to Know Us</h4>
      </section>
      <section>
        <h4>Let Us Help You</h4>
      </section>
      <section>
        <h4>Follow us on Social Media</h4>
      </section>
    </footer>
  );
};

export default Footer;
