import React, { Component } from 'react';
import '../styles/PickInstrument.css';
import { MyContext } from '../MyProvider';

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
          <MyContext.Consumer>
            {({audioFile, setAudioFile, audioFileTester}) => (
              <button
              className='btn btn-primary btn-lg tuudle-purple-btn continue-btn'
              onClick={audioFileTester}
              >
                test
              </button>
            )}
          </MyContext.Consumer>
        </div>
      </main>
    );
  }
}

export default PickInstrument;