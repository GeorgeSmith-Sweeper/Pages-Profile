import { Container } from 'react-bootstrap';
import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me" id="ab-me">
      <Container>
        <h2>About Me</h2>
        <p>I am a software engineer based out of NYC, who enjoys solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp.</p>
        <p>When it comes to building projects, I'm language agnostic. I've created projects using JavaScript, Python, and Java, and am currently learning Elixir.</p>
        <p>I love learning and teaching, and will continue to grow as a developer by listening to the feedback from others and refining my talents. I use technology everyday, and it makes sense to become part of the driving force that moves things forward, by continuing to learn everyday.</p>
        <p>
          Feel free to check out my blog, <a href="http://georgesmith-sweeper.github.io/">The Road Through Code</a>,
          for a detailed look at my thoughts on building software.
        </p>
      </Container>
    </section>
  );
};

export default AboutMe;
