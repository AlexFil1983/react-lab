import React from 'react'
import { reduxForm } from 'redux-form'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {submitLimits} from '../../src/redux/actions/actions'
import {connect} from 'react-redux'
import './css/Limit-buttons.css'


let LimitButtons = (props) => {

 const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    
   return (
    
       <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned" type="button" onClick={() => props.handleSubmit(props.submitLimits(20))}>
          20
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered" type="button" onClick={() => props.handleSubmit(props.submitLimits(30))}>
        30
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned" onClick={() => props.handleSubmit(props.submitLimits(40))}>
        40
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" onClick={() => props.handleSubmit(props.submitLimits(50))}>
        50
        </ToggleButton>
      </ToggleButtonGroup>
    
    );
}

LimitButtons = reduxForm({
  form: 'limitButtons'
})(LimitButtons)


function mapDispatchToProps(dispatch) {
  return {
          submitLimits: (limit) => dispatch(submitLimits(limit))
          }
  }


LimitButtons = connect(null, mapDispatchToProps)(LimitButtons)


export default LimitButtons
