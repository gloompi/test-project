import React from 'react';
import Checkbox from 'material-ui/Checkbox';

class Checkboxes extends React.Component {
  render() {
    const {checked, handleChange} = this.props
    return (
      <div>
        <label>
          <Checkbox
            checked={checked}
            onChange={handleChange('checked')}
            value="checked"
            color="primary"
            />
          <span>Дополнительное окно</span>
        </label>
      </div>
    )
  }
}

export default Checkboxes