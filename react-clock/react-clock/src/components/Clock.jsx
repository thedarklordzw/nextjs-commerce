import React, { useEffect, useState } from 'react';
import styles from './Clock.module.css';

let hours, minutes, seconds;

const Clock = () => {
  const [time, setTime] = useState('00:00');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const _hours = date.getHours();
      const _minutes = date.getMinutes();
      const _seconds = date.getSeconds();

      if (_hours < 10) {
        hours = `0${_hours}`;
      } else {
        hours = _hours;
      }
      if (_minutes < 10) {
        minutes = `0${_minutes}`;
      } else {
        minutes = _minutes;
      }
      if (_seconds < 10) {
        seconds = `0${_seconds}`;
      } else {
        seconds = _seconds;
      }

      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }, []);

  return <div className={styles.clock}>{time}</div>;
};

export default Clock;
