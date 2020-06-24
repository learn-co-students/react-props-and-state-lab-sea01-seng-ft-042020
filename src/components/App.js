import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchFilterType = (event) => {
    let filter = event.target.value
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  fetchPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url).then(resp => resp.json()).then(json => this.setState({pets: json}))
  }

  onAdoptPet = pet_id => {
    let pets = this.state.pets.map(pet => {
      if (pet.id === pet_id) {
        pet.isAdopted = true
        return pet
      } else {
        return pet
      }
    })
    this.setState({
      pets: pets
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.fetchFilterType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
