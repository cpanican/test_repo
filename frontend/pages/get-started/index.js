import styles from '../../styles/Home.module.css'

export default function GetStarted() {
    return (
        <div>
            <h1 className={styles.title}>Sweet! Let's get started. </h1>
            <p className={styles.description}>Click on the record button and start whistling a tune. Once you're done, click finish recording and let Tuudle do its magic!</p>

            <a href="/success">
                <button class="btn btn-outline-secondary"><h2><i class="bi bi-mic"></i>Record</h2></button>
            </a>
        </div>
    )
}