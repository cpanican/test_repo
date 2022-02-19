// add bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// add bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// custom css
import '../styles/globals.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Toodle 🎵</title>
        <meta name="description" content="Create instrumental music with a whistle" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header class="p-3 border-bottom">
        <div class="container">
          <div class="d-flex align-items-center justify-content-center">
            <a class="navbar-brand" href="/"><img src="/tuudle.svg" alt="" width="88" height="45" /></a>
          </div>
        </div>
      </header>

      <div class="container">
        <Component {...pageProps} />
      </div>

      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between py-3 my-4 border-top">
          <img src="/tuudle.svg" alt="Tuudle Logo" width={91} height={44} />
          <ul class="nav justify-content-end">
            <li><p class="text-center text-muted">© 2022 Tuudle, All rights reserved.</p></li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default MyApp
