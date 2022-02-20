import React from 'react';

export default function Footer() {
  return (
    <div class="container footer-padding">
      <footer class="d-flex flex-wrap justify-content-between py-3 my-4 border-top">
        <img src="/tuudle.svg" alt="Tuudle Logo" width={91} height={44} />
        <ul class="nav justify-content-end">
          <li><p class="text-center text-muted">© 2022 Tuudle, All rights reserved.</p></li>
        </ul>
      </footer>
    </div>
  )
}