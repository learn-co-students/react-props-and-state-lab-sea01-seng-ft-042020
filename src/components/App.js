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

  updateFilter = newFilter => {

    this.setState({
      filters: {
        type: newFilter
      }

    })
  }

  //este metodo traz o "data" que neste caso eh o "click"
  //de baixo para cima  
  adoptPet = petId => {
    this.setState(prevState => {
      return {pets: prevState.pets.map(pet =>{
        if(petId !== pet.id){
          return pet
        }else{
          pet.isAdopted = true
          return pet
        }
      })
      }
    })
  }


  fetchPets = () => {
    const {type} = this.state.filters
    fetch(`/api/pets${type === "all"?"":"?type="+type}`)
    .then(resp => resp.json())
    .then(data => this.setState({pets:data}))
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
              <Filters onHandleFetch={this.fetchPets} onUpdateFilter={this.updateFilter} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
