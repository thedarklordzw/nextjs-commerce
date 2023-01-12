import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Products.module.css';
import Card from './Card';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';
import { motion } from 'framer-motion';

const Products = () => {
  const [data, setData] = useState('');
  const firebaseConfig = {
    apiKey: 'AIzaSyBxSHrV27jbVguscEki_YSHkDxxULgSS0o',
    authDomain: 'nextjs-2e2d9.firebaseapp.com',
    databaseURL: 'https://nextjs-2e2d9-default-rtdb.firebaseio.com',
    projectId: 'nextjs-2e2d9',
    storageBucket: 'nextjs-2e2d9.appspot.com',
    messagingSenderId: '656853458176',
    appId: '1:656853458176:web:695f17f976a9b1bac427e5',
  };

  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    const getDB = () => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `inStock`))
        .then(snapshot => {
          if (snapshot.exists()) {
            setData(snapshot.val());
          } else {
            throw new Error('No data available, try again');
          }
        })
        .catch(error => console.log(error));
    };

    getDB();
  }, []);

  return (
    <>
      <Card />
      <main className={styles.main}>
        <section>
          {data && (
            <>
              <section className={styles['on-sale']}>
                <h2 className='heading-secondary'>Trending Items</h2>
                <ul className={styles.products}>
                  {data.trending.map(product => (
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      className={styles.item}
                    >
                      {product.item}
                    </motion.li>
                  ))}
                </ul>
              </section>
              <section className={styles['on-sale']}>
                <h2 className='heading-secondary'>On Sale</h2>
                <ul className={styles.products}>
                  {data.onSale.map(product => (
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      className={styles.item}
                    >
                      {product.item}
                    </motion.li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Products;
