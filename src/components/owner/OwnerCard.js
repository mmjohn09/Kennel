
import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-ownername">{this.props.owner.name}</span></h3>
          <p>Phone Number: {this.props.owner.phoneNumber}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Delete</button>
          <button type="button"
        onClick={() => {this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;