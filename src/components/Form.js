import React, { Component } from 'react'
import {connect} from 'react-redux'

import {submitForm} from '../ducks/form'
import Select from './Select'
import Checkbox from './Checkbox'
import Input from './Input'
import Button from './Button'

class Form extends Component {
  state = {
    select: '',
    checked: false
  }

  render(){
    const {select, checked} = this.state
    console.log(
      this.props.select, 
      this.props.checkbox, 
      this.props.input1, 
      this.props.input2
    )
    return (
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={this.handleSubmit}>
        <Select select={select} handleChange={this.handleSelect} />
        <Checkbox checked={checked} handleChange={this.handleCheck} />
        <Input />
        {checked && <Input />}
        <Button />
      </form>
    )
  }

  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const {submitForm} = this.props
    const {select, checked} = this.state
    submitForm({
      select, checkbox: checked, 
      input1: e.target[2].value, 
      input2: e.target[3].value.length ? e.target[3].value : null
    })
  }
}

export default connect(state => ({
  select: state.form.select,
  checkbox: state.form.checkbox,
  input1: state.form.input1,
  input2: state.form.input2
}), {submitForm})(Form)