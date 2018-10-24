import React, { Component } from 'react'

export default class Customizer extends Component {
  constructor (props) {
    super(props)
  }

  onLoad () {
    window.YETI.customizer.init({
      selector: '#customizer', // required
      product: 'rambler-colster', // required
      data: [], // optionally pre-populate with a design
      onReady: () => {
        // open customizer once ready
        window.YETI.customizer.open()
      },

      onApprove: (data) => {
        console.log({ data })
      }
    })
  };

  componentDidUpdate () {

  }

  render () {
    return (
      <>
        {this.onLoad()}
      </>
    )
  }
}
