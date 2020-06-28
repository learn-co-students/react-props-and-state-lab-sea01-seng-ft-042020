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

  fetchAllPets = () => {
    let url = '/api/pets'
    const {type} = this.state.filters

    if (this.state.filters.type !== 'all') {
      url = `/api/pets?type=${type}`
    }
    fetch(url)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(foundPets => this.setState({
        pets: foundPets 
    }))
  }

  changeType = newFilter => {
    this.setState({
      filters: {
        type: newFilter
      }
    })
  }

  adoptPet = petId => {
    // if this were for an api call
    // Is an example wil not work
  //   fetch("/api/pets/adopt", {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json" 
  //     },
  //     body: JSON.stringify({pet_id:petId})
  //   })
  //   .then(response => response.json())
  //   .then(updatedPet => {

  //   this.setState(prevState => {
  //     return {pets: prevState.pets.map(pet => {
  //       if (petId === pet.id) {
  //           pet.isAdopted = true;
  //           return updatedPet;
  //       } else {
  //           return pet
  //         }
  //       })}
  //   })
  // })

    console.log(`App component got adoption request for ${petId}`)

    this.setState(prevState => {
      return {pets: prevState.pets.map(pet => {
        if (petId === pet.id) {
            pet.isAdopted = true;
            return pet
        } else {
            return pet
          }
        })}
    })
  }


  render() {
    // needed this.fetchAllPets() because we needed to display everything first before interacting with filters
    // this.fetchAllPets();
    // console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onFindPetsClick={this.fetchAllPets}
                onChangeType={this.changeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
