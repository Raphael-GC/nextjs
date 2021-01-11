import Head from 'next/head'
import Link from 'next/link'
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

        <p className={styles.description}>I'm a Developer {' '}
          <a href="https://app.rocketseat.com.br/me/raphaelcarneiro" target="_blank" className={styles.animated}>student at Rocketseat</a>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/Raphael-GC/Xradar" target="_blank" className={styles.card}>
            <h3>Xradar &rarr;</h3>
            <p>A project for trainning Node.js, React, React Native and Mongo DB.</p>
          </a>

          <a href="https://github.com/Raphael-GC/ecoleta" target="_blank" className={styles.card}>
            <h3>Ecoleta &rarr;</h3>
            <p>This project was done during the Rocktseat bootcamp - Next Level Week #1</p>
          </a>

          <a href="https://github.com/Raphael-GC/Skylab_JS" target="_blank" className={styles.card}>
            <h3>My notepad (lab) &rarr;</h3>
            <p>This project is a record of my learning that includes the main languages ​​and frameworks currently most used in web programming.</p>
          </a>

          <a href="https://github.com/Raphael-GC/nextjs" target="_blank" className={styles.card}>
            <h3>Next.js &rarr;</h3>
            <p>This page has no HTML file. It was builded with only JS and CSS.</p>
          </a>
        </div>        
      </main>

      <footer className={styles.footer}>
        <p>With 💖 by
          <a href="https://github.com/Raphael-GC" target="_blank"> Raphael Carneiro </a> - Grow a {' '} 
          <Link href="/lumus">
            <a><img className={styles.logo} src="/favicon.ico" alt="Lumus" /></a>
          </Link>!
        </p>  
      </footer>
    </div> 
  )
}
