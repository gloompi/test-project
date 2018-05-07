import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input'

const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
  },
})

function Inputs(props) {
  const { classes } = props
  return (
    <Input
        defaultValue="Hello world"
        className={classes.input}
        inputProps={{
            'aria-label': 'Description',
        }}
    />
  )
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Inputs)