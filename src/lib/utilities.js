import React from 'react'

const utils = {

  renderColors(color) {
    return (
      <div id={color.id}>
        <input type="checkbox" id={color.id} name="color" value={color.hexCode} />
        <label htmlFor={color.id}> {color.displayName} </label>
      </div>
    )
  }

}

export default utils;