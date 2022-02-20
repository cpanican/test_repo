import styles from '../../styles/Home.module.css'
<<<<<<< HEAD

export default function GetStarted() {
    return (
        <div>
            <h1 className={styles.title}>Sweet! Let's get started. </h1>
            <p className={styles.description}>Click on the record button and start whistling a tune. Once you're done, click finish recording and let Tuudle do its magic!</p>
=======
export default function GetStarted() {
    return (
        <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Sweet! Let's Get Started.
        </h1>
>>>>>>> 81f3a9783d8c6494f5252ba9d0c52e239ae47812

        <p className={styles.description}>
          Click on the record button and start whistling a tune. Once you're done, click finish recording and let Tuudle do its magic!
        </p>

        <div className={styles.grid}>
          <a href="/success">
            <button class="btn btn-outline-secondary"><i class="bi bi-mic"></i>Record</button>
          </a>
        </div>


      </main>
    </div>


    )
}