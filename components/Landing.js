import React from 'react';
import Header from './Header';
import Head from 'next/head';
import Products from './Products';
import styles from './Landing.module.css';

function Landing() {
  return (
    <React.Fragment>
      <Head>
        <title>Next eCommerce</title>
      </Head>
      <Header />
      <Products />
    </React.Fragment>
  );
}

export default Landing;
