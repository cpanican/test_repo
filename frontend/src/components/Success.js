import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Success.css';

class Success extends Component {

  render() {
    return (
      <main className="main">
        <h1>Success page</h1>
        <h1>Your music notes are here!</h1>
        <p className="description">
         <p> Tuudle completed the instrumental conversion. </p>
         <p> Download your tunes below. </p>
         <p> Keep rockin'! </p>
        </p>



        <div className ="box">

        <button>
        <div className ="card">
        <img className="card-img-top"
        src="/images/redpiano.jpg"
        width ="100"
        height = "100" >
        </img>
        <p className ="purplefont">MonoSynth</p>
        </div>
        </button>

        <button>
        <div className ="card">
        <img className="card-img-top"
        src="/images/guitar.jpg"
           width ="100"
           height ="100">
        </img>
        <p className ="purplefont">Guitar</p>
        </div>
        </button>

        <button>
        <div className = "card">

        <img className="card-img-top"
        src="/images/electric-guitar.jpg"
          width ="100"
          height = "100">
          </img>

        <p className = "purplefont">Electric Guitar</p>
        </div>
        </button>
       </div>
      </main>
    );
  }
}

export default Success;