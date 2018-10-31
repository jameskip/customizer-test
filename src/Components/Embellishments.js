import React from 'react'

export default class Embellishments extends React.Component {
  render () {
    return (
      <fieldset id="embellishment" onChange={this.props.onChange}>
        <legend>Embellishments</legend>
        {this.props.renderedEmbellishments}
      </fieldset>
    )
  }
}
