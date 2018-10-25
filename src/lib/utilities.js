import React from 'react'

const utils = {

  renderColors(color) {
    return (
      <div id={color.id} key={color.hexCode} style={{borderStyle: "solid", borderColor: "white"}}>
        <input type="checkbox" id={color.id} name="color" value={color.displayName} />
        <label htmlFor={color.id} style={{ position: "absolute", left: "75px"  }}> {color.displayName} </label>
        <span style={{ paddingLeft: "5px", height: "20px", width: "10px", position: "absolute", backgroundColor: color.hexCode, zIndex: 0  }}> </span>
      </div>
    )
  },

  renderProducts(product) {
    return (
      <div id={product.name} key={product.name} style={{borderStyle: "solid", borderColor: "white"}}>
        <input style={{ paddingTop: 100 }} type="checkbox" name="product" value={product.name} />
        <label htmlFor={product.name}> {product.name} </label>
      </div>
    )
  },

  cleanedStrings(strings) {

    const cleaned = strings.reduce((acc, curr) => curr.toLowerCase().split(' ').concat(acc), [])
  
    return cleaned
  }

}

export default utils;