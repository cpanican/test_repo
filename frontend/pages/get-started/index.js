import styles from '../../styles/Home.module.css'
export default function GetStarted() {
    return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Sweet! Let's Get Started.
        </h1>

        <p className={styles.description}>
          Click on the record button and start whistling a tune. Once you're done, click finish recording and let Tuudle do its magic!
        </p>

        <div className={styles.grid}>

                <button className={styles.RecordingBtn} class="btn btn-outline-secondary btn-lg">

                    <p className={styles.recordFont}> Record </p>
                    <i class="bi bi-mic"></i>
                </button>

        </div>


      </main>
    </div>


    )
}