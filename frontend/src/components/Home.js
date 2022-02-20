import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <h1 className="title">
            Create instrumental music with a whistle.
          </h1>
          <p className="description">
            <b>New to creating music?</b><br></br>
            We've got you covered! Tuudle helps musicians and music lovers convert whistles to music notes and convert the music notes to different instruments.
          </p>
        </div>

        <div className="buttonGrid">
          <div>
            <Link to="/get-started">
              <button class="btn btn-outline-secondary btn-lg tuudle-learn-btn"><i class="bi bi-mic"></i> Learn More</button>
            </Link>
          </div>
          <div></div>
          <div>
            <Link to="/get-started">
              <button class="btn btn-primary btn-lg tuudle-purple-btn">Get Started <i class="bi bi-arrow-right-short"></i></button>
            </Link>
          </div>
        </div>

        <video id="background-video" className="mainVideo" autoPlay loop muted poster="/images/guitarlady.png">
          <source src="/tuudle-homepage-video.mp4" type="video/mp4"></source>
        </video>
      </main>
    );
  }
}

export default Home;