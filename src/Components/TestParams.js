import React from 'react'
import utils from '../lib/utilities.js'
import metaData from '../lib/metaData.js'

//
// rendered component variables
//

const renderedProducts = Object.values(metaData.products).map(curr => utils.renderProducts(curr))
const renderedColors = Object.values(metaData.colors).map(curr => utils.renderColors(curr))

//
//  TestParams
//

export default class TestParams extends React.Component {

  constructor(props) {
    super(props)
    this.state = { products: new Set(), colors: new Set() }

    this.handleProductChange = this.handleProductChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  
  handleProductChange(event) {
    let selected = event.target.value
    let products

    return this.state.products.has(selected) ? (
      products = this.state.products.delete(selected),
      this.setState({ products })
    ) : (
      products = this.state.products.add(selected),
      this.setState({ products })
    )
  }

  handleColorChange(event) {
    let selected = event.target.value
    let colors

    return this.state.colors.has(selected) ? (
      this.state.colors.delete(selected),
      this.setState({ colors: this.state.colors })
    ) : (
      colors = this.state.colors.add(selected),
      this.setState({ colors })
    )
  }
  
  handleSubmit(event) {
    // TODO: pass form to test runner to begin running automated tests;
    let cleanStrings = utils.cleanStrings(this.state)
    cleanStrings = JSON.stringify(cleanStrings)
    
    alert(`Test parameters: ${cleanStrings}`)
    event.preventDefault()
  }

  handleReset() {
    // this does not work because when component handles change the first click after registeres as selected alread
    // this.setState({ products: new Set(), colors: new Set() })
  }
  
  render () {
    return (
      <form id="form" onSubmit={this.handleSubmit} onReset={this.handleReset}>

        <fieldset id="product" onChange={this.handleProductChange}>
          <legend>Product</legend>
            {renderedProducts}
        </fieldset>

        <fieldset id="color" onChange={this.handleColorChange}>
          <legend>Color</legend>
          {renderedColors}
        </fieldset>

        <input type="submit" value="Test" />
        <input type="reset" value="Reset" />

      </form>
    )
  }
}