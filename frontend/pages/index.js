import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Toodle </title>
        <meta name="description" content="Create instrumental music with a whistle" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <span className={styles.logo}>
            <Image src="/tuudle.svg" alt="Tuudle Logo" width={91} height={44} />
          </span>
        </a>
      </footer>
    </div>
  )
}
