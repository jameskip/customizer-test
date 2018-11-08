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
      colors: [...strings.colors].reduce((acc, curr) => curr.toLowerCase().replace(' ', '').split(' ').concat(acc), []),
      embellishments: [...strings.embellishments].reduce((acc, curr) => curr.split(' ').concat(acc), [])
    }
  },

  findMatchingProducts (strings) {
    const productParams = [...strings.products].join('|')
    const colorParams = [...strings.colors].join('|')
    let regex = /stainless/.test(colorParams) ? `(${productParams})$|(${productParams})-(${colorParams})$` : `(${productParams})-(${colorParams})$`
    regex = new RegExp(regex)
    console.log({ productParams, colorParams, regex })

    let testableStrings = metaData.productStrings.filter(curr => regex.test(curr))
    return testableStrings
  },

  runTests (parameters) {
    console.log({ parameters })

    for (let i = 0; i < parameters.length; i++) {
      let initObject = {
        selector: '#customizer', // required
        product: parameters[i], // required
        data: [],
        onReady: function () {
          window.YETI.customizer.open()
          window.YETI.customizer.approve()
        },
        onApprove: function (data) {
          console.log({ data })
        }
      }

      let func = (init) => {
        console.log({ init })

        window.YETI.customizer.init(init)
        window.YETI.customizer.open()
      }

      setTimeout(func.bind(null, initObject), 1)
    }
  }
}

export default utils
