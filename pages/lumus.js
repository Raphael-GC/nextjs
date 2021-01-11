import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Lumus.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raphael Carneiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          It's <a>Lumus</a>
        </h1>

        <p className={styles.description}>My green-pet {' '}
          <a> <img src="/favicon.ico"/>buxus sempervirens</a>
        </p>
      </main>
      <footer>
        <Link href="/">
            <a>Back Home</a>
        </Link>
    </footer>  
    </div>
  )
}