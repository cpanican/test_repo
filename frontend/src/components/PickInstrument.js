import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/PickInstrument.css';
import { MyContext } from '../MyProvider';

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
    fetch('http://192.168.1.10:420/convert', {
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
        <div>
          <h1 className="title">Pick your instrument.</h1>
          <p className="description">To convert the music notes, select the instrument(s) below.</p>
        </div>

        <div className="instrumentGrid">
          <div>
            <input type="checkbox" className="btn-check" id="btn-check-1-outlined" checked autocomplete="off"></input>
            <label class="btn btn-outline-secondary btn-selectors" for="btn-check-1-outlined">🎹 Piano</label><br></br>
          </div>
          <div></div>
          <div>
            <input type="checkbox" className="btn-check" id="btn-check-2-outlined" checked autocomplete="off"></input>
            <label class="btn btn-outline-secondary btn-selectors" for="btn-check-2-outlined">🎸 Guitar</label><br></br>
          </div>
          <div></div>
          <div>
            <input type="checkbox" className="btn-check" id="btn-check-3-outlined" checked autocomplete="off"></input>
            <label class="btn btn-outline-secondary btn-selectors" for="btn-check-3-outlined">🎺 Trumpet</label><br></br>
          </div>
          <div></div>
        
        </div>

        

        <div className="buttonGrid">
          <div>
            <Link to="/get-started">
              <button class="btn btn-outline-secondary btn-lg tuudle-learn-btn"><i class="bi bi-arrow-left-short"></i> Record Again</button>
            </Link>
          </div>
          <div></div>
          <div>
            <Link to="/loading">
              <button class="btn btn-primary btn-lg tuudle-purple-btn" onClick={() => {
                this.uploadFile(this.state.audioData.blob, this.state.pickedInstrument);
              }}>Convert</button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
PickInstrument.contextType = MyContext;
export default PickInstrument;