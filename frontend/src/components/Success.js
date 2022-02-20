import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Success.css';
import { Link } from "react-router-dom";

class Success extends Component {

  render() {
    return (
      <main className="main">
        <h1>Success! </h1>
        <h1>Your music notes are here!</h1>
        <p className="description">
         <p> Tuudle completed the instrumental conversion. </p>
         <p> Download your tunes below. </p>
         <p> Keep rockin'! </p>
        </p>


        <div className ="box2">
            <div><button type="button" class="btn btn-secondary">G</button></div>
            <div><button type="button" class="btn btn-secondary">F#</button></div>
            <div><button type="button" class="btn btn-secondary">F</button></div>
            <div><button type="button" class="btn btn-secondary">D</button></div>
            <div><button type="button" class="btn btn-secondary">E</button></div>
            <div><button type="button" class="btn btn-secondary">G</button></div>
            <div><button type="button" class="btn btn-secondary">A</button></div>
            <div><button type="button" class="btn btn-secondary">C</button></div>

        </div>

        <div className ="box">
        <button>
        <div className ="card">
        <img className="card-img-top"
        src="/images/redpiano.jpg"
        width ="100"
        height = "100" >
        </img>
        <p className ="purplefont">MonoSynth</p><i class="bi bi-download"></i>
        </div>
        </button>

        <button>
        <div className ="card">
        <img className="card-img-top"
        src="/images/guitar.jpg"
           width ="100"
           height ="100">
        </img>
        <p className ="purplefont">Guitar</p><i class="bi bi-download"></i>
        </div>
        </button>

        <button>
        <div className = "card">

        <img className="card-img-top"
        src="/images/electric-guitar.jpg"
          width ="100"
          height = "100">
          </img>

        <p className = "purplefont">Electric Guitar</p><i class="bi bi-download"></i>
        </div>
        </button>
       </div>

       <div className="buttonGrid">
          <div>
            <Link to="Home.js">
              <button class="btn btn-outline-secondary btn-lg tuudle-learn-btn"><i class="bi bi-arrow-left"></i> Home</button>
            </Link>
          </div>
          <div></div>
          <div>
            <Link to="/get-started">
              <button class="btn btn-primary btn-lg tuudle-purple-btn">Record Again <i class="bi bi-mic"></i></button>
            </Link>
          </div>
        </div>



      </main>
    );
  }
}

export default Success;