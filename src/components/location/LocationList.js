import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    state = {
        locations: [],
    }

    componentDidMount() {
        LocationManager.getAll()
            .then((locations) => {
                this.setState({
                    locations: locations
                })
            })
    }

    deleteLocation = id => {
        LocationManager.delete(id)
            .then(() => {
                LocationManager.getAll()
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }

    render() {
        console.log("LOCATION LIST: Render");

        return (
            <React.Fragment>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { this.props.history.push("/locations/new") }}>
                    Add Location
                </button>
            </section>
            <div className="container-cards">
                {this.state.locations.map(location => <LocationCard
                    key={location.id}
                    locationObject={location}
                    deleteLocation={this.deleteLocation}
                    {...this.props}
                />)}
            </div>
            </React.Fragment>
        )
    }
}

export default LocationList