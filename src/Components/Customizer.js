import React from 'react'

export default class Customizer extends React.Component {
  onLoad () {
    window.YETI.customizer.init({
      selector: '#customizer', // required
      product: 'rambler-tumbler-20oz-white', // required
      data: [], // optionally pre-populate with a design
      onReady: () => {
        window.YETI.customizer.open()
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
