import React, { Component } from "react";
import github from "../images/github.png";

class Contact extends Component {
  render() {
    return (
      <div className="flex-contact">
        <div className="contact-item">
          <div className="contact-content">
            <a
              href="https://github.com/dewadisak/port2"
              target="_blank"
              className="github"
            >
              <img src={github} />
              Github
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-content">
            <a
              href="https://www.facebook.com/dew.adisak.18"
              target="_blank"
              className="facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
