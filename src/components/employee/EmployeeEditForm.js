import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"

class EmployeeEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    department: "",
    phoneNumber: "",
    loadingStatus: true,
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingEmployee = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedEmployee = {
      name: this.state.name,
      department: this.state.department,
      phoneNumber: this.state.phoneNumber,
      id: this.props.match.params.employeeId
    };

    EmployeeManager.update(editedEmployee)
      .then(() => this.props.history.push("/employees"))
  }

  componentDidMount() {
    EmployeeManager.get(this.props.match.params.employeeId)
      .then(employee => {
        this.setState({
          name: employee.employeeName,
          department: employee.department,
          phoneNumber: employee.phoneNumber,
          loadingStatus: false,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="department"
                value={this.state.department}
              />
              <label htmlFor="department">Department</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="phoneNumber"
                value={this.state.phoneNumber}
              />
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default EmployeeEditForm