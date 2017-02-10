import React, { Component } from 'react';

class ContactInfo extends Component {

  render () {
    return (
       <div className="contact-info">
        <a name="contact"></a>
        <div className="row no-bottom-margin">
          <div className="col s12 m12 l12">
            <div className="social">
              <a href="https://github.com/GeorgeSmith-Sweeper"><i id="github" className="fa fa-github-square" aria-hidden="true"> </i></a>
              <a href="https://www.linkedin.com/in/george-smith-sweeper-087b753a
"><i id="linkedin" className="fa fa-linkedin" aria-hidden="true"> </i></a>
              <a href="https://angel.co/george-smith-sweeper"><i id="angellist" className="fa fa-angellist" aria-hidden="true"> </i></a>
              <a href="mailto:george.smsweeper@gmail.com"><i id="mail" className="fa fa-envelope" aria-hidden="true"> </i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
