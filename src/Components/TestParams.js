import React, { Component } from 'react'
import renderColors from '../lib/utilities.js'

const colors = {
  Stainless: {
    id: 'stainless',
    background: '#667984',
    displayName: 'Stainless'
  },
  Seafoam: {
    id: 'seafoam',
    background: '#65c7c8',
    displayName: 'Seafoam'
  },
  Navy: {
    id: 'navy',
    background: '',
    displayName: 'Navy'
  }
}

const products = [
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

const renderedColors = Object.values(colors).map(curr => renderColors(curr))

export default class TestParams extends Component {
  render () {
    return (
      <form id="form">

        <fieldset id="product">
          <legend>Product</legend>

        </fieldset>

        <fieldset id="color">
          <legend>Color</legend>
          {renderedColors}
        </fieldset>
      </form>
    )
  }
}
