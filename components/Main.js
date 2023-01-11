import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import Image from 'next/image';

let productData;

let heroData;
// const dataIsFilled = productData.length !== 0;

function Main() {
  const [dataIsValid, setDataIsValid] = useState('');

  useEffect(() => {
    const getProductData = async () => {
      const res = await fetch('http://localhost:3000/api');
      // const data = await res.json();
      const [data, _data] = await res.json();

      console.log(data);
      heroData = _data;

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
              {heroData && (
                <Image src={heroData.imageUrl} width={1292} height={300} />
              )}
            </div>
          </section>
          <section className={styles.main__productBox}>
            <article className={styles.main__product}>
              <div className={styles.main__imgBox}>
                <Image
                  className={styles.main__img}
                  src={productData[0].imageUrl}
                  width={185}
                  height={200}
                  alt='product image'
                />
              </div>
              <h3 className={styles.main__title}>{productData[0].name}</h3>
              <p className={styles.main__reviews}>5 stars</p>
              <p className={styles.main__description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                culpa deserunt maxime animi atque consectetur facere consequatur
                aliquid voluptatum aspernatur velit tempore cum, vel praesentium
                inventore. A amet magni tempore.
              </p>
              <div className={styles.main__buttonBox}>
                <button className={styles.main__btn}>Add to cart</button>
              </div>
            </article>
            <article className={styles.main__product}>
              <div className={styles.main__imgBox}>
                <Image
                  className={styles.main__img}
                  src={productData[1].imageUrl}
                  width={185}
                  height={200}
                  alt='product image'
                />
              </div>
              <h3 className={styles.main__title}>{productData[1].name}</h3>
              <p className={styles.main__reviews}>5 stars</p>
              <p className={styles.main__description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                culpa deserunt maxime animi atque consectetur facere consequatur
                aliquid voluptatum aspernatur velit tempore cum, vel praesentium
                inventore. A amet magni tempore.
              </p>
              <div className={styles.main__buttonBox}>
                <button className={styles.main__btn}>Add to cart</button>
              </div>
            </article>
            <article className={styles.main__product}>
              <div className={styles.main__imgBox}>
                <Image
                  className={styles.main__img}
                  src={productData[2].imageUrl}
                  width={185}
                  height={200}
                  alt='product image'
                />
              </div>
              <h3 className={styles.main__title}>{productData[2].name}</h3>
              <p className={styles.main__reviews}>5 stars</p>
              <p className={styles.main__description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                culpa deserunt maxime animi atque consectetur facere consequatur
                aliquid voluptatum aspernatur velit tempore cum, vel praesentium
                inventore. A amet magni tempore.
              </p>
              <div className={styles.main__buttonBox}>
                <button className={styles.main__btn}>Add to cart</button>
              </div>
            </article>
            <article className={styles.main__product}>
              <div className={styles.main__imgBox}>
                <Image
                  className={styles.main__img}
                  src={productData[3].imageUrl}
                  width={185}
                  height={200}
                  alt='product image'
                />
              </div>
              <h3 className={styles.main__title}>{productData[3].name}</h3>
              <p className={styles.main__reviews}>5 stars</p>
              <p className={styles.main__description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                culpa deserunt maxime animi atque consectetur facere consequatur
                aliquid voluptatum aspernatur velit tempore cum, vel praesentium
                inventore. A amet magni tempore.
              </p>
              <div className={styles.main__buttonBox}>
                <button className={styles.main__btn}>Add to cart</button>
              </div>
            </article>
          </section>
        </main>
      )}
    </React.Fragment>
  );
}

export default Main;
