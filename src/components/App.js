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
  changePets = newType =>{
    this.setState({
      filters: {
        type: newType
      }
    })
  }
  handleAdopt = petId =>{
    console.log(petId)
    this.setState({
      pets: [...this.state.pets.map(pet => {
        return pet.id === petId? {...pet, isAdopted:true}: pet
      })]
    })
  }

  fetchAllPets = () => {
      let url = '/api/pets'

      if(this.state.filters.type !== 'all'){
        url = `/api/pets?type=${this.state.filters.type}`
      }
    fetch(url)
    .then(res => res.json())
    .then( data => this.setState({
      pets:data
    }))
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
              <Filters onFindPetsClick={this.fetchAllPets} onChangeType={this.changePets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
