import React, { Component } from 'react'

export default class Customizer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const main = document.createElement('main')
    main.setAttribute('id', 'main')
    document.body.appendChild(main)
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
