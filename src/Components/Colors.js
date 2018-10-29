import React from 'react'

export default class Colors extends React.Component {
  render () {
    return (
      <fieldset id="color" onChange={this.props.onChange}>
        <legend>Colors</legend>
        {this.props.renderedColors}
      </fieldset>
    )
  }
}
