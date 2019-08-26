import React, { Component } from 'react';
import './Employee.css'

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>Department: {this.props.employee.department}</p>
          <p>Phone Number: {this.props.employee.phoneNumber}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>FIRE!!!</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;