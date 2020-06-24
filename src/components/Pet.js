import React from 'react'

class Pet extends React.Component {
  buttonLoad = (adopted) => {
    return adopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
  }

  render() {
    const { name, age, weight, gender, type, isAdopted } = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "male" ? "♂" : "♀"}
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
          {this.buttonLoad(isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
