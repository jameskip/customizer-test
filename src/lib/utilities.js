import React from 'react'

const utils = {

  renderColors(color) {
    return (
      <div id={color.id}>
        <input type="checkbox" id={color.id} name="color" value={color.displayName} />
        <label htmlFor={color.id}> {color.displayName} </label>
      </div>
    )
  },

  renderProducts(product) {
    return (
      <div id={product.name}>
        <input type="checkbox" name="product" value={product.name} />
        <label htmlFor={product.name}> {product.name} </label>
      </div>
    )
  }

}

export default utils;