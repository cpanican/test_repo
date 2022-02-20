import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Create instrumental music with a whistle.
      </h1>
      <p className={styles.description}>
        <b>New to creating music?</b><br></br>
        We've got you covered! Tuudle helps musicians and music lovers convert whistles to music notes and convert the music notes to different instruments.
      </p>

      <div className={styles.buttonGrid}>
        <div>
          <a href="/get-started">
            <button class="btn btn-outline-secondary btn-lg"><i class="bi bi-mic"></i> Learn More</button>
          </a>
        </div>
        <div></div>
        <div>
          <a href="/get-started">
            <button class="btn btn-primary btn-lg">Get Started <i class="bi bi-arrow-right-short"></i></button>
          </a>
        </div>
      </div>

      <img className={styles.mainImage} src="/images/guitarlady.png" width="1200" height="475" />
    </main>
  )
}