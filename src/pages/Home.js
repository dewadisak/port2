import React, { Component } from "react";
import idea from "../images/idea.gif";
import rocket from "../images/rocket.gif";
import snow from "../images/snow.gif";
import Contentpic from "../contents/Contentpic";
import '../contents/Contentpic.css'
import Contentdata from '../contents/Contentdata'
import '../contents/Contentdata.css'


class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg-home">
        <div className="flex-home">
            <div className="home-item">
              <div className="home-content ">
                <h5>Portfolio</h5>
                <br />
                <p>
                  Officia enim do irure Lorem nulla incididunt Officia cillum
                  sunt aliquip esse .
                </p>
                <br />
                <a href="/">
                  <button className="btn41-43 btn-42">Get Start</button>
                </a>
              </div>
            </div>
          </div>
        <div className="flex-home2">
          <div className="flex-item2">
            <div className="flex-content2">
              <h5>Promoting your business and services </h5>
              <p>
                A responsive, single-page business template with everything you
                need propel
              </p>
            </div>
          </div>
        </div>
        <div className="flex-home2">
          <div className="flex-item3">
            <div className="flex-content3">
                <div className="card">
                <img src={idea}/>
              <h5>Fugiat dolor</h5>
              <p>
              Non eu ex cillum ullamco qui laborum non Nulla id est.
              </p>
              </div>
            </div>
          </div>
          <div className="flex-item3">
            <div className="flex-content3">
            <div className="card">
            <img src={rocket}/>
              <h5>Ex do in</h5>
              <p>
               Nostrud ut ullamco ipsum irure anim proident proident.
              </p>
            </div>
            </div>
          </div>

          <div className="flex-item3">
            <div className="flex-content3">
            <div className="card">
            <img src={snow}/>
              <h5>Non id </h5>
              <p>
               Cupidatat est est aliquip consequat ut exercitation do.
              </p>
            </div>
            </div>
          </div>
        </div>
        
        <Contentpic/>
        <Contentdata/>
        </div>
      </div>
    );
  }
}

export default Home;
