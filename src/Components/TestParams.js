import React, { Component } from 'react'
import utils from '../lib/utilities.js'


//
//  test data
//

const colors = {
  stainless: {
    id: 'stainless',
    hexCode: '#667984',
    displayName: 'Stainless'
  },
  seafoam: {
    id: 'seafoam',
    hexCode: '#65c7c8',
    displayName: 'Seafoam'
  },
  navy: {
    id: 'navy',
    hexCode: '#39444b',
    displayName: 'Navy'
  },
  black: {
    id: 'black',
    hexCode: '#000000',
    displayName: 'Black'
  },
  brickred: {
    id: 'brickred',
    hexCode: '#8f3833',
    displayName: 'Brick Red'
  },
  white: {
    id: 'white',
    hexCode: '#ffffff',
    displayName: 'White'
  },
  charcoal: {
    id: 'charcoal',
    hexCode: '#39444b',
    displayName: 'Charcoal'
  },
  harborpink: {
    id: 'harborpink',
    hexCode: '#e387a0',
    displayName: 'Harbor Pink'
  },
  skyblue: {
    id: 'skyblue',
    hexCode: '#85cbec',
    displayName: 'Sky Blue'
  },
}

const productStrings = [
  'rambler-tumbler-20oz', 'rambler-tumbler-20oz-seafoam', 'rambler-tumbler-20oz-navy', 'rambler-tumbler-20oz-black',
  'rambler-tumbler-20oz-brickred', 'rambler-tumbler-20oz-pink', 'rambler-tumbler-20oz-white', 'rambler-tumbler-20oz-charcoal',
  'rambler-tumbler-20oz-harborpink', 'rambler-tumbler-30oz', 'rambler-tumbler-30oz-seafoam', 'rambler-tumbler-30oz-navy',
  'rambler-tumbler-30oz-black', 'rambler-tumbler-30oz-brickred', 'rambler-tumbler-30oz-pink', 'rambler-tumbler-30oz-white',
  'rambler-tumbler-30oz-charcoal', 'rambler-tumbler-30oz-harborpink', 'rambler-mug-14oz', 'rambler-mug-14oz-seafoam',
  'rambler-mug-14oz-navy', 'rambler-mug-14oz-black', 'rambler-mug-14oz-brickred', 'rambler-mug-14oz-white',
  'rambler-mug-14oz-harborpink', 'rambler-wine-tumbler-10oz-navy', 'rambler-wine-tumbler-10oz', 'rambler-wine-tumbler-10oz-seafoam',
  'rambler-wine-tumbler-10oz-black', 'rambler-wine-tumbler-10oz-brickred', 'rambler-wine-tumbler-10oz-white',
  'rambler-wine-tumbler-10oz-harborpink', 'rambler-lowball', 'rambler-lowball-seafoam', 'rambler-lowball-navy',
  'rambler-lowball-black', 'rambler-lowball-brickred', 'rambler-lowball-white', 'rambler-colster', 'rambler-colster-seafoam',
  'rambler-colster-navy', 'rambler-colster-black', 'rambler-colster-brickred', 'rambler-colster-skyblue', 'rambler-colster-white',
  'rambler-colster-charcoal', 'rambler-stackable-pint-16oz', 'rambler-stackable-pint-16oz-seafoam', 'rambler-stackable-pint-16oz-black',
  'rambler-stackable-pint-16oz-brickred', 'rambler-stackable-pint-16oz-white', 'rambler-stackable-pint-16oz-navy', 'rambler-bottle-18oz',
  'rambler-bottle-18oz-seafoam', 'rambler-bottle-18oz-navy', 'rambler-bottle-18oz-black', 'rambler-bottle-18oz-brickred',
  'rambler-bottle-18oz-white', 'rambler-bottle-18oz-charcoal', 'rambler-bottle-18oz-harborpink', 'rambler-bottle-26oz',
  'rambler-bottle-26oz-seafoam', 'rambler-bottle-26oz-navy', 'rambler-bottle-26oz-black', 'rambler-bottle-26oz-brickred',
  'rambler-bottle-26oz-white', 'rambler-bottle-36oz', 'rambler-bottle-36oz-seafoam', 'rambler-bottle-36oz-navy',
  'rambler-bottle-36oz-black', 'rambler-bottle-36oz-brickred', 'rambler-bottle-36oz-white', 'rambler-bottle-64oz',
  'rambler-jug-64oz', 'rambler-jug-128oz', 'boomer-dog-bowl-8', 'rambler-bottle-26oz-olivegreen',
  'rambler-lowball-lecoral', 'rambler-bottle-18oz-tahoeblue', 'rambler-bottle-18oz-skyblue', 'rambler-bottle-64oz-olivegreen',
  'rambler-bottle-18oz-olivegreen', 'rambler-bottle-26oz-tahoeblue', 'rambler-tumbler-30oz-lecoral', 'rambler-lowball-olivegreen',
  'rambler-tumbler-30oz-olivegreen', 'rambler-tumbler-20oz-skyblue', 'rambler-bottle-26oz-pink', 'rambler-bottle-36oz-olivegreen',
  'rambler-bottle-18oz-pink', 'rambler-tumbler-30oz-skyblue', 'rambler-tumbler-20oz-tahoeblue', 'rambler-colster-tahoeblue',
  'rambler-colster-olivegreen', 'rambler-tumbler-20oz-lecoral', 'rambler-lowball-tahoeblue', 'rambler-tumbler-30oz-tahoeblue',
  'rambler-bottle-18oz-lecoral', 'rambler-bottle-64oz-black', 'rambler-tumbler-20oz-olivegreen'
]

const products = {
  Tumbler20oz: {
    name: 'Tumbler 20oz',
    options: [
      'rambler-tumbler-20oz',
      'rambler-tumbler-20oz-seafoam',
      'rambler-tumbler-20oz-navy',
      'rambler-tumbler-20oz-black',
      'rambler-tumbler-20oz-brickred',
      'rambler-tumbler-20oz-pink',
      'rambler-tumbler-20oz-white',
      'rambler-tumbler-20oz-charcoal',
      'rambler-tumbl er-20oz-harborpink',
      'rambler-tumbler-20oz-skyblue',
      'rambler-tumbler-30oz-skyblue',
      'rambler-tumbler-20oz-tahoeblue',
      'rambler-tumbler-20oz-lecoral',
      'rambler-tumbler-20oz-olivegreen',
    ]
  },
  Tumbler30oz: {
    name: 'Tumbler 30oz',
    options: [
      'rambler-tumbler-20oz',
      'rambler-tumbler-20oz-seafoam',
      'rambler-tumbler-20oz-navy',
      'rambler-tumbler-20oz-black',
      'rambler-tumbler-20oz-brickred',
      'rambler-tumbler-20oz-pink',
      'rambler-tumbler-20oz-white',
      'rambler-tumbler-20oz-charcoal',
      'rambler-tumbl er-20oz-harborpink',
      'rambler-tumbler-20oz-skyblue',
      'rambler-tumbler-30oz-skyblue',
      'rambler-tumbler-20oz-tahoeblue',
      'rambler-tumbler-20oz-lecoral',
      'rambler-tumbler-20oz-olivegreen',
    ]
  }
}


//
// component rendering helper functions
//

const renderedProducts = Object.values(products).map(curr => utils.renderProducts(curr))
const renderedColors = Object.values(colors).map(curr => utils.renderColors(curr))


//
//  TestParams
//

export default class TestParams extends Component {

  constructor(props) {
    super(props)
    this.state = {colors: new Set()}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
    let selected = event.target.value
    
    // console.log({ selected })
    
    if (this.state.colors.has(selected)) {
      this.state.colors.delete(selected)
    } else {
      let colors = this.state.colors.add(selected)
      this.setState({ colors: colors })
    }
  }
  
  handleSubmit(event) {
    // TODO: pass form to test runner to begin running automated tests
    alert('Form submitted: ' + JSON.stringify([...this.state.colors]))
    // let cleared = this.state.colors.clear()
    // this.setState({colors: cleared})
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