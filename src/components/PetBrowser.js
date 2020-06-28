import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  
  renderPets = () => {
    return this.props.pets.map(currentPet => {
      return <Pet onAdoptPet={this.props.onAdoptPet} key={currentPet.id} pet={currentPet} />
    })
  }
  
  
  render() {
    // console.log(this.props)
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
