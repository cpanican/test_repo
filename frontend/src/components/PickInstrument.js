import React, { Component } from 'react';
import '../styles/PickInstrument.css';
import { MyContext } from '../MyProvider';
import { Link } from "react-router-dom";

class PickInstrument extends Component {
  constructor(props) {
    super(props)

    this.state = {
      audioData: null,
      pickedInstrument: null,
      isLoading: false
    }
  }

  componentDidMount() {
    let value = this.context;
    this.setState({
      audioData: value.audioFile
    })
  }

  uploadFile = (file, instrument) => {
    console.log(this.state.audioData.blob);
    this.setState({
      isLoading: true
    })
    var formData = new FormData();
    formData.append('file', file);
    formData.append('instrument', instrument);
    fetch('http://192.168.1.244:420/convert', {
      mode: 'no-cors',
      method: 'POST',
      body: formData,
    }).then(response => response.json())
      .then(success => {
        console.log(success)
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <main className="main">
        {this.state.isLoading
          ?
          <div>
            <h1 className="title">Converting to instrument...</h1>
            <p className="description">Tuudle is converting your music notes to intrumental audio.</p>

            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
            </div>
          </div>
          :
          <div>
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

                <button class="btn btn-primary btn-lg tuudle-purple-btn" onClick={() => {
                  this.uploadFile(this.state.audioData.blob, this.state.pickedInstrument);
                }}>Convert</button>

              </div>
            </div>
          </div>
        }
        
      </main>
    );
  }
}
PickInstrument.contextType = MyContext;
export default PickInstrument;