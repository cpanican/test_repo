import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
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
            <button class="btn btn btn-primary">Get Started &rarr;</button>
          </a>
        </div>

        <img src="/images/guitarlady.png" width="1200" height="475" />

      </main>
    </div>
  )
}