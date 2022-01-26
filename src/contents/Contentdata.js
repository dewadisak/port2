import React, { Component } from "react";
import contendata2 from "../images/contentdata2.jpg";
import contendata1 from "../images/contentdata1.jpg";

class Contentdata extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex-data">
          <div className="data-item">
            <div className="data-content">
              <img src={contendata2} />
            </div>
          </div>

          <div className="data-item">
            <div className="data-content">
              <h5>Est veniam quis </h5>
              <p>
                Cillum adipisicing dolor fugiat fugiat labore ipsum est non
                fugiat labore dolor dolor. Non commodo eiusmod amet occaecat
                duis non laborum duis voluptate cupidatat. Tempor in occaecat id
                incididunt amet officia officia sit adipisicing.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-data">
          <div className="data-item">
            <div className="data-content">
              <h5>Eu tempor voluptate</h5>
              <p>
                Officia Lorem dolore pariatur consequat tempor reprehenderit
                irure ipsum aliqua tempor reprehenderit tempor velit. Anim ex
                elit sit eu aliquip ad irure voluptate incididunt veniam
                deserunt cupidatat laborum amet. Laboris non magna minim aliquip
                nisi esse qui ea labore. Laboris ipsum in laboris cillum irure
                minim irure consectetur ea mollit. Nostrud exercitation amet
                enim incididunt voluptate ex ea exercitation. Aute occaecat
                dolore ipsum ex dolor non sint veniam aute. Aliquip nostrud et
                consectetur ex.
              </p>
            </div>
          </div>

          <div className="data-item">
            <div className="data-content">
              <img src={contendata1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contentdata;
