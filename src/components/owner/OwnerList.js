import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    state = {
        owners: [],
    }

    componentDidMount() {
        OwnerManager.getAllOwnersAndAnimal()
            .then((owners) => {
                this.setState({
                    owners: owners
                })
            })
    }

    deleteOwner = id => {
        OwnerManager.delete(id)
          .then(() => {
            OwnerManager.getAllOwnersAndAnimal()
              .then((newOwners) => {
                this.setState({
                  owners: newOwners
                })
              })
          })
      }

    render() {
        console.log("OWNER LIST: Render");

        return (
            <div className="container-cards">
                {this.state.owners.map(owner => <OwnerCard key={owner.id} owner={owner}
                deleteOwner={this.deleteOwner}
                />)}
            </div>
        )
    }
}

export default OwnerList