import React from 'react'
import metaData from './metaData'

const utils = {

  renderColors (color) {
    return (
      <div id={color.id} key={color.hexCode} style={{ borderStyle: 'solid', borderColor: 'white' }}>
        <input type="checkbox" id={color.id} name="color" value={color.displayName} />
        <label htmlFor={color.id} style={{ position: 'absolute', left: '75px' }}> {color.displayName} </label>
        <span style={{ paddingLeft: '5px', height: '20px', width: '10px', position: 'absolute', backgroundColor: color.hexCode, zIndex: 0 }}> </span>
      </div>
    )
  },

  renderProducts (product) {
    return (
      <div id={product.name} key={product.name} style={{ borderStyle: 'solid', borderColor: 'white' }}>
        <input style={{ paddingTop: 100 }} type="checkbox" name="product" value={product.name} />
        <label htmlFor={product.name}> {product.name} </label>
      </div>
    )
  },

  renderEmbellishments (embellishment) {
    return (
      <div id={embellishment} key={embellishment} style={{ borderStyle: 'solid', borderColor: 'white' }}>
        <input style={{ paddingTop: 100 }} type="checkbox" name="embellishment" value={embellishment} />
        <label htmlFor={embellishment}> {embellishment} </label>
      </div>
    )
  },

  cleanStrings (strings) {
    return {
      products: [...strings.products].reduce((acc, curr) => curr.toLowerCase().split(' ').concat(acc), []),
      colors: [...strings.colors].reduce((acc, curr) => curr.toLowerCase().split(' ').concat(acc), []),
      embellishments: [...strings.embellishments].reduce((acc, curr) => curr.toLowerCase.split(' ').concat(acc), [])
    }
  },

  findMatchingProducts (strings) {
    const productParams = [...strings.products].join('|')
    const colorParams = [...strings.colors].join('|')
    let regex = `(${productParams})$|((${productParams})\\W(${colorParams}))$`
    regex = RegExp(regex, 'gmi')
    console.log({ productParams, colorParams, regex })

    let testableStrings = metaData.productStrings.filter(curr => regex.test(curr))
    console.log({ testableStrings })
    return 'Boom shackalacka'
  }
}

export default utils
