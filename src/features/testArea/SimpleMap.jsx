import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

const AnyReactComponent = () => <Icon name="marker" size="big" color="red" />;

class SimpleMap extends Component {
  state = {
    zoom: 11
  };

  componentWillMount = () => {
    const { latlng } = this.props;
    this.setState({
      center: {
        lat: latlng.lat,
        lng: latlng.lng
      }
    });
  };

  render() {
    const { latlng } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDZZkr-V7T9P_ABU8mdGb3PxqjkNZ-yTCw" }}
          defaultCenter={latlng}
          defaultZoom={this.state.zoom}>
          <AnyReactComponent lat={latlng.lat} lng={latlng.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
