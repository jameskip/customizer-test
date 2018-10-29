import React from 'react'

export default class Products extends React.Component {
  render () {
    return (
      <fieldset id="product" onChange={this.props.onChange}>
        <legend>Products</legend>
        {this.props.renderedProducts}
      </fieldset>
    )
  }
}
