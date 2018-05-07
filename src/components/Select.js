import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

class SimpleSelect extends Component {
  render() {
    const { classes, select, handleChange } = this.props

    return (
      <Fragment>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Select</InputLabel>
          <Select
            value={select}
            onChange={handleChange}
            inputProps={{
              name: 'select',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Fragment>
    )
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleSelect)