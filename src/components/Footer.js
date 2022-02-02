import React, { Component } from "react";


class Footer extends Component {
  

    render() {
      return (
        <div className="container">
    <footer id="contact">
  <ul>
    <div id="icon-container">
     
      <a href="#">
        <div className="icon">
          <li><i className="fab fa-github"></i></li>
        </div>
      </a>
      <a href="#">
        <div className="icon">
          <li><i className="fab fa-facebook-f"></i></li>
        </div>
      </a>
      <a href="#">
        <div className="icon">
          <li><i className="far fa-envelope"></i></li>
        </div>
      </a>
    
    </div>
  </ul>
  <p>&copy; 2022, Portfolio</p>
</footer>
     
        </div>
      );
    }
  }
  
  
export default Footer;
