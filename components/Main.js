import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import Image from 'next/image';

let productData = [
  {
    imageUrl:
      'https://media.takealot.com/b/2/cms/p/1292x300/smart/filters:focal(462x0:854x300)/original_images/12dd3dd8b0ef46a5470c259af73f0262f981d805.png',
  },
];
// const dataIsFilled = productData.length !== 0;

function Main() {
  const [dataIsValid, setDataIsValid] = useState('');

  useEffect(() => {
    const getProductData = async () => {
      const res = await fetch('http://localhost:8080/api');
      const data = await res.json();

      // const dataIsFilled = data.length !== 0;
      if (data.length === 0) return;

      setDataIsValid(data);

      productData = data;
      console.log(
        productData[0],
        productData[1],
        productData[2],
        productData[3]
      );
    };

    getProductData();
  }, []);

  return (
    <React.Fragment>
      {dataIsValid && (
        <main className={styles.main}>
          <section className={styles.main__ad}>
            <div className={styles.main__adImage}>
              <Image src='/images/logo.png' width={854} height={300} />
            </div>
          </section>
          <section className={styles.main__productBox}>
            <article className={styles.main__product}>
              <Image
                src={productData[0].imageUrl}
                width={510}
                height={735}
                alt='product image'
              />

              <span>5 stars</span>
              <h3>Product Name</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                culpa deserunt maxime animi atque consectetur facere consequatur
                aliquid voluptatum aspernatur velit tempore cum, vel praesentium
                inventore. A amet magni tempore.
              </p>
            </article>
            <article className={styles.main__product}>
              <Image
                src={productData[1].imageUrl}
                width={510}
                height={735}
                alt='product image'
              />

              <span>5 stars</span>
              <h3>Product Name</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                culpa deserunt maxime animi atque consectetur facere consequatur
                aliquid voluptatum aspernatur velit tempore cum, vel praesentium
                inventore. A amet magni tempore.
              </p>
            </article>
            <article className={styles.main__product}>
              <Image
                src={productData[2].imageUrl}
                width={510}
                height={735}
                alt='product image'
              />
              <span>5 stars</span>
              <h3>Product Name</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                culpa deserunt maxime animi atque consectetur facere consequatur
                aliquid voluptatum aspernatur velit tempore cum, vel praesentium
                inventore. A amet magni tempore.
              </p>
            </article>
            <article className={styles.main__product}>
              <Image
                src={productData[3].imageUrl}
                width={510}
                height={735}
                alt='product image'
              />
              <span>5 stars</span>
              <h3>Product Name</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                culpa deserunt maxime animi atque consectetur facere consequatur
                aliquid voluptatum aspernatur velit tempore cum, vel praesentium
                inventore. A amet magni tempore.
              </p>
            </article>
          </section>
        </main>
      )}
    </React.Fragment>
  );
}

export default Main;
