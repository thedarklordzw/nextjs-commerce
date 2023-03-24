import React, { useEffect, useState } from 'react';
let a = 1;

const Clock = () => {
  const timer = setInterval(() => {
    a++;
  }, 1000);
};

export default Clock;
