import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toodle 🎵</title>
        <meta name="description" content="Create instrumental music with a whistle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create instrumental music with a whistle.
        </h1>

        <p className={styles.description}>
          <b>New to creating music?</b> We've got you covered! Tuudle helps musicians and music lovers convert whistles to music notes and convert the music notes to different instruments.
        </p>

        <div className={styles.grid}>
          <a href="/get-started">
            <button><h2>Learn more</h2></button>
          </a>

          <a href="/get-started">
            <button><h2>Get Started &rarr;</h2></button>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer" >
          Tuudle logo here
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
