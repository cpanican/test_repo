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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><Image src="/tuudle.svg" alt="" width="88" height="45" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#">Products</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#">Resources</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create instrumental music with a whistle.
        </h1>

        <p className={styles.description}>
          <b>New to creating music?</b> We've got you covered! Tuudle helps musicians and music lovers convert whistles to music notes and convert the music notes to different instruments.
        </p>

        <div className={styles.grid}>
          <a href="/get-started">
             <button class="btn btn-outline-secondary"><i class="bi bi-mic"></i>Learn More</button>

          </a>


          <a href="/get-started">
            <button class ="btn btn-info">Get Started &rarr;</button>
          </a>
        </div>
        <img src="https://cdn.discordapp.com/attachments/944282228362453082/944449437101588520/67ioi0b2_1.png" width = "1200" height = "475" />

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