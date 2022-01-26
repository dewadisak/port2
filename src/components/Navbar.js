import React, { Component } from "react";

class Navbar extends Component {


  render() {

    
    return (
      <div className="container">
          <div className="bg">
        <div className="flex-nav">
          <div className="flex-item">
            <div className="logo">
              <p>Parallax</p>
            </div>
          </div>
          <div className="flex-item">
            <div className="menu">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Work</a>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>

        <div className="flex-home">
            <div className="home-item">
              <div className="home-content ">
                <h5>Parallax</h5>
                <br />
                <p>
                  Officia enim do irure Lorem nulla incididunt Officia cillum
                  sunt aliquip esse .
                </p>
                <br />
                <a href="/">
                  <button class="btn41-43 btn-42">Get Start</button>
                </a>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default Navbar;
