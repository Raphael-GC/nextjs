import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raphael Carneiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.linkedin.com/in/raphaelgci9/"> my Page</a>
        </h1>

        <p className={styles.description}>
          I'm a Developer {' '}
          <code href="https://app.rocketseat.com.br/me/raphaelcarneiro" className={styles.animated-button-blue}>student at Rocketseat</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/Raphael-GC/Xradar" className={styles.card}>
            <h3>Xradar &rarr;</h3>
            <p>A project for trainning Node.js, React, React Native and Mongo DB.</p>
          </a>

          <a href="https://github.com/Raphael-GC/ecoleta" className={styles.card}>
            <h3>Ecoleta &rarr;</h3>
            <p>This project was done during the Rocktseat bootcamp - Next Level Week #1</p>
          </a>

        </div>

        
      </main>

      <footer className={styles.footer}>
        <p>With ❤ by 
          <a href="https://github.com/Raphael-GC" target="_blank" rel="noopener noreferrer">Raphael Carneiro</a>
          <a>{' '} <img src="/favicon.ico" alt="Lumus" className={styles.logo} /></a>
        </p>  
      </footer>
    </div> 
  )
}
