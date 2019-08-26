import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationDetail extends Component {

  state = {
      name: "",
      address: "",
      phoneNumber: ""
  }

  componentDidMount(){
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        phoneNumber: location.phoneNumber
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <address>Address: {this.state.address}</address>
            <p>Phone Number: {this.state.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;