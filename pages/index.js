import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import Banner from '../components/Banner';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('Banner Button Clicked');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner
          handleOnClick={handleOnBannerBtnClick}
          buttonText='View stores nearby'
        />
        <div className={styles.heroImage}>
          <Image
            src='/static/hero-image.png'
            alt='coffee connoisseur'
            width={700}
            height={400}
          />
        </div>
      </main>
    </div>
  );
}
