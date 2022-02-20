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
      audioData: null,
      continueState: true,
    }
  }

  recordHandler = () => {
    if (this.state.recordState === null || this.state.recordState === RecordState.STOP) {
      this.setState({
        recordState: RecordState.START
      })
    } else if (this.state.recordState === RecordState.START) {
      this.setState({
        recordState: RecordState.STOP,
        continueState: false
      })
    }
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
          <button className="RecordingBtn" onClick={this.recordHandler}>
            <i className="bi bi-mic mic-icon-size"></i>
            <p className="recordFont">{this.state.recordState === RecordState.START ? "Recording" : "Record"}</p>
          </button>
          <AudioReactRecorder
            backgroundColor="rgb(255,255,255)"
            state={recordState}
            onStop={this.onStop} />
          <audio
            id='audio'
            controls
            src={this.state.audioData ? this.state.audioData.url : null}
          ></audio>
          <button
            className='btn btn-primary btn-lg tuudle-purple-btn continue-btn'
            disabled={this.state.continueState}
          >
            Continue
          </button>
        </main>
      </div>
    );
  }
}

export default GetStarted;