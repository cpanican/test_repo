import React, { Component } from 'react';
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


       <div>

        <button>
        <img source="pianoframe" src="/images/redpiano.jpg" width ="200" height = "200" ></img>
        </button>



        <button>
        <img source="pianoframe" src="/images/guitar.jpg" width ="200" height = "200"></img>
        </button>



        <button>
        <img source="pianoframe" src="/images/electric-guitar.jpg" width ="200" height = "200"></img>
        </button>
        </div>


      </main>
    );
  }
}

export default Success;