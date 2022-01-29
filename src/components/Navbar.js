import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component {


  render() {

    
    return (
      <div className="container">
          <div className="bg">
        <div className="flex-nav">
          <div className="flex-item">
            <div className="logo">
              <p>Portfolio</p>
            </div>
          </div>
          <div className="flex-item">
            <div className="menu">
              <Link to="/" >Page</Link>
              <Link to="/about" >API</Link>
              <Link to="/work" >ThreeJS</Link>
              <Link to="/contact" >Contact</Link>
            </div>
          </div>
        </div>

 
   
          </div>
      </div>
    );
  }
}

export default Navbar;
