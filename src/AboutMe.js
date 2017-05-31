import React, { Component } from 'react';
import headShot from '../public/rsz_headshot.d9eb27a5.jpg';
import { Image } from 'react-bootstrap';

class AboutMe extends Component {
  render () {
    return (
       <div className="about-me">
        <a name="ab-me"></a>
        <div className="row">
          <div className="col s12 m4 l4">
            <Image src={headShot} alt="A photo of George-Smith-Sweeper" id="head-shot" responsive circle />
          </div>
          <div className="col s12 m8 l8">
            <h2>Hi, I'm George</h2>
            <p>I am a software engineer based out of NYC, who enjoys solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp.</p>
            <p>Most of my projects have been built using JavaScript, React, Bootstrap, and CSS.</p>
            <p>I love learning and teaching, and will continue to grow as a developer by listening to the feedback from others and refining my talents. I use technology everyday, and it makes sense to become part of the driving force that moves things forward, by continuing to learn everyday. This site will continue to evolve as my skill set grows, and frameworks change.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
