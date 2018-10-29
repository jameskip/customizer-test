import React from 'react'

export default class Customizer extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  onLoad () {
    window.YETI.customizer.init({
      selector: '#customizer', // required
      product: 'rambler-colster', // required
      data: [], // optionally pre-populate with a design
      onReady: () => {

      },

      onApprove: (data) => {
        console.log(JSON.stringify(data))
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

// "{"version":"2.3","customtype":"monogram","ramsideloc":"front","productkey":"rambler-colster","ramvertloc":"auto","ramorientation":"auto","corrid":"8dc4557c-4519-43f5-a380-ffdd830fd951","groupid":null,"custpreview":"https://rambleron-staging.s3.amazonaws.com/flat_images/2018/10-29/8201-1540829417-large.png","warpedpreview":"https://s3.amazonaws.com/rambleron-staging/approval_images/2018/10-29/8201/1540829416-large.png","previewid":8201,"previewurl":"https://store-staging.rambleron.com/api/v2/customizations/8201?type=monogram","laserimage":"https://rambleron-staging.s3.amazonaws.com/bmp/2018/10-29/8201-1540829406.bmp","monogram":{"rawtext":"SDD","translatedtext":"sDd","basefont":"roman","font":"roman","size":"auto"}}"
