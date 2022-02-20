import React, { Component } from 'react';
import '../styles/PickInstrument.css';

class PickInstrument extends Component {
  render() {
    return (
      <main className="main">
        <h1 className="title">Pick your instrument.</h1>
        <p className="description">To convert the music notes, select the instrument(s) below.</p>

        <div className="buttonGrid">
          <div>
            <a href="/get-started">
              <button class="btn btn-outline-secondary btn-lg tuudle-learn-btn"><i class="bi bi-arrow-left-short"></i> Record Again</button>
            </a>
          </div>
          <div></div>
          <div>
            <a href="/get-started">
              <button class="btn btn-primary btn-lg tuudle-purple-btn">Convert</button>
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default PickInstrument;