import React from 'react';
import Header from './Header';
import Head from 'next/head';
import styles from './Landing.module.css';
import Main from './Main';

function Landing() {
  return (
    <React.Fragment>
      <Head>
        <title>Next eCommerce</title>
      </Head>
      <Header />
      <Main />
    </React.Fragment>
  );
}

export default Landing;
