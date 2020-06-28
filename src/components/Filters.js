import React from 'react'

class Filters extends React.Component {


  // alternative to click for finding pets
  // handleFetchPets = (e) => {
  //   this.props.onFindPetsClick(e.target.value)
  // }

  handleUpdateFilter = (e) => {
    this.props.onChangeType(e.target.value)
  }



  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleUpdateFilter}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          {/* taking out of render alternative solution */}
          {/* <button className="ui secondary button" onClick={this.handleFetchPets}>Find pets</button> */}
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
