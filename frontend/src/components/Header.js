import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header class="p-3 border-bottom">
      <div class="container">
        <div class="d-flex align-items-center justify-content-center">
          <a class="navbar-brand" href="/"><img src="/tuudle.svg" alt="" width="88" height="45" /></a>
        </div>
      </div>
    </header>
  )
}