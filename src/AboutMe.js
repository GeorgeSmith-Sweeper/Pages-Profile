import { Image } from 'react-bootstrap';
import React from 'react';
import headShot from './resources/headshot.jpg';

const AboutMe = () => {
  return (
    <div className="about-me">
      <a name="ab-me"> </a>
      <div className="row">
        <div className="col s12 m4 l4">
          <Image src={headShot} alt="A photo of George-Smith-Sweeper" id="head-shot" responsive circle />
        </div>
        <div className="col s12 m8 l8">
          <h2>George Smith-Sweeper</h2>
          <p>I am a software engineer based out of NYC, who enjoys solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp.</p>
          <p>When it comes to building projects, I'm language agnostic. I've created projects using, JavaScript, Python, and Java, and am currently learning Elixir.</p>
          <p>I love learning and teaching, and will continue to grow as a developer by listening to the feedback from others and refining my talents. I use technology everyday, and it makes sense to become part of the driving force that moves things forward, by continuing to learn everyday.
          </p>
          <p>
            Feel free to check out my blog, <a href="http://georgesmith-sweeper.github.io/">The Road Through Code</a>,
            for a detailed look at my thoughts on building software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
