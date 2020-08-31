import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import './css/Limit-buttons.css'

export default function LimitButtons() {
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
        <ToggleButton value="left" aria-label="left aligned">
          <p>20</p>
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
        <p>30</p>
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
        <p>40</p>
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified">
        <p>50</p>
        </ToggleButton>
      </ToggleButtonGroup>
    );
    
}
