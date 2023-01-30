import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styles from './Products.module.css';
import Card from './Card';
import Link from 'next/link';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getStorage, ref } from 'firebase/storage';

const productIds = [];
const Products = () => {
  const [data, setData] = useState('');

  const [error, setError] = useState(false);
  const [images, setImages] = useState('');

  const [trending, setTrending] = useState('');
  const [onSale, setOnSale] = useState('');
  const [forSale, setForSale] = useState('');

  const clickedElementRef = useRef();

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
  const db = getFirestore(app);
  const storage = getStorage(app);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'stock'));
      querySnapshot.forEach(doc => {
        const { trending, onSale, forSale } = doc.data();

        setData(doc.data());
        setTrending(trending);
        setForSale(forSale);
        setOnSale(onSale);
      });
    };

    getData();
  }, []);

  const getDocHandler = async () => {
    const docRef = doc(db, 'stock', 'inStock');
    const docSnap = await getDoc(docRef);

    const clickedElement = clickedElementRef;

    if (docSnap.exists()) {
      const { trending: trendingData } = docSnap.data();

      for (const product of productIds) {
        const productId = trendingData.find(
          productName => productName.id === product
        );
        console.log(productId);
      }
    } else {
      console.log('No such document');
    }
  };

  return (
    <div>
      <Card />
      <main className={styles.main}>
        <section>
          {data && (
            <>
              <section className={styles['on-sale']}>
                <h2 className='heading-secondary'>Trending Items</h2>
                <ul className={styles.products}>
                  {trending.map(product => {
                    productIds.push(product.id);
                    return (
                      <motion.li
                        onClick={getDocHandler}
                        key={product.id}
                        className={styles.item}
                      >
                        <article className={styles.product}>
                          <Image src={product.image} height={300} width={300} />
                          <p className={styles.price}>
                            <span>{product.item}</span>
                            <span>{product.price}</span>
                          </p>
                          <button className={styles.order}>Add to Cart</button>
                        </article>
                      </motion.li>
                    );
                  })}
                </ul>
              </section>
              <section className={styles['on-sale-2']}>
                <h2 className='heading-secondary'>On Sale</h2>
                <ul className={styles.products}>
                  {onSale.map(product => (
                    <motion.li
                      onClick={getDocHandler}
                      key={product.id}
                      className={styles.item}
                    >
                      <article className={styles.product}>
                        <Image src={product.image} height={300} width={300} />
                        <p className={styles.price}>
                          <span>{product.item}</span>
                          <span>{product.price}</span>
                        </p>
                        <button className={styles.order}>Add to Cart</button>
                      </article>
                    </motion.li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Products;
