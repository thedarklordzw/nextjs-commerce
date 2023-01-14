import React from 'react';
import Header from './Header';
import Head from 'next/head';
import Products from './Products';
import styles from './Landing.module.css';
import Sidebar from './Sidebar';

function Landing() {
  return (
    <React.Fragment>
      <Head>
        <title>Phathisa | Your favourite shop to get the cheapest goods</title>
      </Head>
      <div className='flex'>
        <Sidebar />
        <Products />
      </div>
    </React.Fragment>
  );
}

export default Landing;
