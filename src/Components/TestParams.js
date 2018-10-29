import React from 'react'
import Colors from './Colors'
import Products from './Products'
import utils from '../lib/utilities'
import metaData from '../lib/metaData'

//
//  TestParams
//

export default class TestParams extends React.Component {
  constructor (props) {
    super(props)
    this.state = { products: new Set(), colors: new Set() }

    this.handleProductChange = this.handleProductChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleProductChange (event) {
    let selected = event.target.value
    let products

    // eslint-disable-next-line
    return this.state.products.has(selected) ? (
      this.state.products.delete(selected),
      this.setState({ products: this.state.products })
    ) : (
      products = this.state.products.add(selected),
      this.setState({ products })
    )
  }

  handleColorChange (event) {
    let selected = event.target.value
    let colors

    // eslint-disable-next-line
    return this.state.colors.has(selected) ? (
      this.state.colors.delete(selected),
      this.setState({ colors: this.state.colors })
    ) : (
      colors = this.state.colors.add(selected),
      this.setState({ colors })
    )
  }

  handleSubmit (event) {
    // TODO: pass form to test runner to begin running automated tests;
    let cleanStrings = utils.cleanStrings(this.state)
    console.table(cleanStrings)
    // window.YETI.customizer.open()
    event.preventDefault()
  }

  handleReset () {
    // this does not work because when component handles change the first click after registeres as selected already
    // this.setState({ products: new Set(), colors: new Set() })
  }

  render () {
    const renderedProducts = Object.values(metaData.products).map(curr => utils.renderProducts(curr))
    const renderedColors = Object.values(metaData.colors).map(curr => utils.renderColors(curr))

    return (
      <form id="form" onSubmit={this.handleSubmit} onReset={this.handleReset}>

        <Products onChange={this.handleProductChange} renderedProducts={renderedProducts} />
        <Colors onChange={this.handleColorChange} renderedColors={renderedColors} />

        <input type="submit" value="Test" />
        <input type="reset" value="Reset" />

      </form>
    )
  }
}
