
import React, { Component } from 'react'

import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {

    state = {
        animals: [],
    }

    componentDidMount() {
        AnimalManager.getAll()
            .then((animals) => {
                this.setState({
                    animals: animals
                })
            })
    }

    deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => {
                AnimalManager.getAll()
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.animals.map(animal =>
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                        deleteAnimal={this.deleteAnimal}
                    />
                )}
            </div>
        )
    }
}

export default AnimalList