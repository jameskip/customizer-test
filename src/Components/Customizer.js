import React from 'react'

export default class Customizer extends React.Component {
  constructor (props) {
    super(props)

    this.front = JSON.stringify({ 'version': '2.3', 'customtype': 'prepared', 'ramsideloc': 'front', 'productkey': 'rambler-tumbler-20oz-white', 'ramvertloc': 'auto', 'ramorientation': 'auto', 'corrid': 'b53ccc74-92df-46fc-b411-a7c2979e2dac', 'groupid': null, 'custpreview': 'https://yeticustomshop-sandbox-howard.imgix.net/test/designs/standard/state/al-state-bird/flat.png', 'warpedpreview': 'https://yeticustomshop-sandbox-howard.imgix.net/test/designs/standard/state/al-state-bird/rambler-tumbler-20oz-white/approval-front.png', 'laserimage': 'https://yeticustomshop-sandbox-howard.imgix.net/test/designs/standard/state/al-state-bird/rambler-tumbler-20oz-white/laser-ready.bmp', 'prepared': { 'itemid': '2592', 'itemkeyid': 'al-state-bird', 'itembasekey': '/standard/state/al-state-bird', 'premium': false } })
  }

  onLoad () {
    window.YETI.customizer.init({
      selector: '#customizer', // required
      product: 'rambler-tumbler-20oz-white', // required
      data: [this.front],

      // optionally pre-populate with a design
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
