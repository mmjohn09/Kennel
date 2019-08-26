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
            <div className="container-cards">
                {this.state.locations.map(location => <LocationCard
                    key={location.id}
                    location={location}
                    deleteLocation={this.deleteLocation}
                />)}
            </div>
        )
    }
}

export default LocationList