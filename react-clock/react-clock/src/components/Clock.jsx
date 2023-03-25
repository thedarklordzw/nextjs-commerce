import React, { useEffect, useState } from 'react';
import styles from './Clock.module.css';

const Clock = () => {
  const [time, setTime] = useState('00:00');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }, []);

  return <div className={styles.clock}>{time}</div>;
};

export default Clock;
