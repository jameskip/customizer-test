import React, { Component } from 'react'
import utils from '../lib/utilities.js'
import metaData from '../lib/metaData.js'

//
// component rendering helper functions
//

const renderedProducts = Object.values(metaData.products).map(curr => utils.renderProducts(curr))
const renderedColors = Object.values(metaData.colors).map(curr => utils.renderColors(curr))

//
//  TestParams
//

export default class TestParams extends Component {

  constructor(props) {
    super(props)
    this.state = { paramaters: new Set() }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
    let selected = event.target.value
    
    if (this.state.paramaters.has(selected)) {
      this.state.paramaters.delete(selected)
      this.setState({ paramaters: this.state.paramaters })
    } else {
      let paramaters = this.state.paramaters.add(selected)
      this.setState({ paramaters })
    }
  }
  
  handleSubmit(event) {
    // TODO: pass form to test runner to begin running automated tests
    alert('Form submitted: ' + JSON.stringify([...this.state.paramaters]))
    // let cleared = this.state.colors.clear()
    // this.setState({ colors: cleared })
    event.preventDefault()
  }
  
  render () {
    return (
      <form id="form" onChange={this.handleChange} onSubmit={this.handleSubmit}>

        <fieldset id="product">
          <legend>Product</legend>
            {renderedProducts}
        </fieldset>

        <fieldset id="color">
          <legend>Color</legend>
          {renderedColors}
        </fieldset>

        <input type="submit" value="Submit" />

      </form>
    )
  }
}