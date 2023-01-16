import React, { useRef, useState } from 'react';
import styles from './Card.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Card = () => {
  const [hiddenCard, setHiddenCard] = useState(false);
  const cardElementRef = useRef();

  const btnClickHandler = () => {
    const cardEl = cardElementRef.current.hidden;
    cardElementRef.current.hidden = true;
    setHiddenCard(true);
  };

  return (
    <motion.article
      onClick={btnClickHandler}
      ref={cardElementRef}
      className={styles.order}
    >
      <p className={styles.text}>Order $50 and above and get free delivery.</p>
      <a href='/' className={styles.link}>
        Start now
      </a>
      <button>X</button>
    </motion.article>
  );
};

export default Card;
