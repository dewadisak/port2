import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Footer extends Component {
  
  
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
  
    render() {
      return (
        <div className="container">
        {/* // Important! Always set the container height explicitly */}
        <div className="footer">     <GoogleMapReact
            bootstrapURLKeys={{ key:''}} //no keys
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        </div>
      );
    }
  }
  
  
export default Footer;
