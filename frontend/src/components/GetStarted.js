import React, { Component } from 'react';
import '../styles/GetStarted.css';
// Import Audio Recorder
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import 'audio-react-recorder/dist/index.css'

class GetStarted extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recordState: null,
      audioData: null
    }
  }

  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE
    })
  }

  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }

  onStop = (data) => {
    this.setState({
      audioData: data
    })
    console.log('onStop: audio data', data)
  }
    
  render() {
    const { recordState } = this.state

    return (
      <div>
        <main className="main">
          <h1 className="title">
            Sweet! Let's Get Started.
          </h1>
          <p className="description">
            Click on the record button and start whistling a tune. Once you're done, click finish recording and let Tuudle do its magic!
          </p>
          <div className="grid">
            <button className="RecordingBtn" class="btn btn-outline-secondary btn-lg">
              <p className="recordFont"> Record </p>
              <i class="bi bi-mic"></i>
            </button>
          </div>
          <AudioReactRecorder state={recordState} onStop={this.onStop} />
          <audio
            id='audio'
            controls
            src={this.state.audioData ? this.state.audioData.url : null}
          ></audio>
          <button id='record' onClick={this.start}>
            Start
          </button>
          <button id='pause' onClick={this.pause}>
            Pause
          </button>
          <button id='stop' onClick={this.stop}>
            Stop
          </button>
        </main>
      </div>
    );
  }
}

export default GetStarted;