
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationname">{this.props.locationObject.name}</span></h3>
          <address>{this.props.locationObject.address}</address>
          <p>Phone Number: {this.props.locationObject.phoneNumber}</p>
          <Link to={`/locations/${this.props.locationObject.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.locationObject.id)}>Delete</button>
          <button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.locationObject.id}/edit`) }}>Edit</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;