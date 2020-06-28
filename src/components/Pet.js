import React from 'react'

class Pet extends React.Component {

  handleAdoptPet = () => {
  //  to ensure that our click is registering correctly
    console.log(`user clicked to adopt ${this.props.pet.name}`)
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const {name, age, weight, gender, type, isAdopted} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female'? '♀' : '♂'}
            {/* destructed on line 5. Could write this.props.pet.name to get the same result */}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted === true? <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
