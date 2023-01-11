import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <article className={styles.order}>
      <p className={styles.text}>Order $50 and above and get free delivery.</p>
      <a href='/' className={styles.link}>
        Start now
      </a>
    </article>
  );
};

export default Card;
