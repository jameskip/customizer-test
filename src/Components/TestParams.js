import React from 'react'
import Colors from './Colors'
import Products from './Products'
import Embellishments from './Embellishments'
import utils from '../lib/utilities'
import metaData from '../lib/metaData'

//
//  TestParams
//

export default class TestParams extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: new Set(),
      colors: new Set(),
      embellishments: new Set()
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleChange (event, type) {
    let selected = event.target.value
    let products

    // eslint-disable-next-line
    return this.state[type].has(selected) ? (
      this.state[type].delete(selected),
      this.setState({ [type]: this.state[type] })
    ) : (
      products = this.state[type].add(selected),
      this.setState({ [type]: products })
    )
  }

  handleSubmit (event) {
    event.preventDefault()
    // TODO: pass form to test runner to begin running automated tests;
    let cleanStrings = utils.cleanStrings(this.state)
    let testableProducts = utils.findMatchingProducts(cleanStrings)

    utils.runTests(testableProducts)

    return testableProducts
  }

  handleReset () {
    // TODO: Reset state
  }

  render () {
    const renderedProducts = Object.values(metaData.products).map(curr => utils.renderProducts(curr))
    const renderedColors = Object.values(metaData.colors).map(curr => utils.renderColors(curr))
    const renderedEmbellishments = Object.keys(metaData.embellishments).map(curr => utils.renderEmbellishments(curr))

    return (
      <form id="form" onSubmit={this.handleSubmit} onReset={this.handleReset}>

        <Products onChange={e => this.handleChange(e, 'products')} renderedProducts={renderedProducts} />
        <Colors onChange={e => this.handleChange(e, 'colors')} renderedColors={renderedColors} />
        <Embellishments onChange={e => this.handleChange(e, 'embellishments')} renderedEmbellishments={renderedEmbellishments} />

        <input type="submit" value="Test" />
        <input type="reset" value="Reset" />

      </form>
    )
  }
}
