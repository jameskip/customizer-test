import React from 'react'

export default function renderColors (color) {
  return (
    <div id={color.id}>
      <input type="checkbox" id={color.id} name="color" value={color.background} />
      <label htmlFor={color.id}> {color.displayName} </label>
    </div>
  )
}
