import React, { Component } from 'react'
import {Provider} from 'react-redux'
import './App.css'

import store from './store'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    )
  }
}

export default App