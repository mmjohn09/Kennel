import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import LocationForm from './location/LocationForm'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import LocationEditForm from './location/LocationEditForm'
import OwnerEditForm from './owner/OwnerEditForm'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props} />
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList {...props} />
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList {...props} />
        }} />
        <Route exact path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={(props) => {
            return <AnimalEditForm {...props} />
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)/edit" render={(props) => {
            return <EmployeeEditForm {...props} />
          }}
        />
        <Route
          path="/locations/:locationId(\d+)/edit" render={props => {
            return <LocationEditForm {...props} />
          }}
        />
        <Route
          path="/owners/:ownerId(\d+)/edit" render={props => {
            return <OwnerEditForm {...props} />
          }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews