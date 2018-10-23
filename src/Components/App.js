import React, { Component } from 'react'
import Customizer from './Customizer.js'
import TestParams from './TestParams.js'
import '../App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <TestParams />
        <Customizer />
      </div>
    )
  }
}

export default App
