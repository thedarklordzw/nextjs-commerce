import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <section className={styles.header__container}>
          <div>
            <Image
              alt='Company logo'
              src='/images/logo.png'
              width={60}
              height={60}
            />
          </div>
          <div className={styles.header__byline}>
            <span>Same day delivery on some orders.</span>
          </div>
          <div className={styles.header__search}>
            <select
              className={styles.header__select}
              name='Choose a category'
              id='category'
            >
              <option value='All'>All</option>
            </select>

            <input type='text' className={styles.header__searchbar} />
            <button className={styles.header__searchBtn}>Search</button>
          </div>
          <div>
            <nav>
              <ul className={styles.header__list}>
                <li>
                  <Link href='/'>
                    <a className={styles.header__links}>Sign In</a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a className={styles.header__links}>Orders</a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a className={styles.header__links}>Cart</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className={styles.header__nav}>
          <nav>
            <ul className={styles.nav__list}>
              <li>
                <Link href='/'>
                  <a className={styles.nav__links}>
                    <span>&equiv;</span>
                    <span>All</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className={styles.nav__links}>Today&apos;s Deals</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className={styles.nav__links}>Customer Support</a>
                </Link>
              </li>
              <li>
                <Link href='/sell'>
                  <a className={styles.nav__links}>Sell</a>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </React.Fragment>
  );
}

export default Header;
