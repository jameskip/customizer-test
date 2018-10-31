import React from 'react'

export default class Customizer extends React.Component {
  onLoad () {
    window.YETI.customizer.init({
      selector: '#customizer', // required
      product: 'rambler-colster', // required
      data: [], // optionally pre-populate with a design
      onReady: () => {

      },

      onApprove: (data) => {
        console.log({ data })
      }
    })
  }

  render () {
    return (
      <>
        {this.onLoad()}
      </>
    )
  }
}
