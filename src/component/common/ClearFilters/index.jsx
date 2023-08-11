
import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'center',
  },
  toggle: {
    padding: '10px',
    fontFamily: `'Roboto', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: '#000',
        color: '#fff',
      },
    },
  },
});

const ClearFilters = ({value, selectToggle}) => {
  const classes = useStyles()

  return (
    <ToggleButtonGroup
      value={value}
      onChange={selectToggle}
      className={classes.root}
      exclusive
    >
        <ToggleButton
          className={classes.toggle}
        >
          Clear filters
        </ToggleButton>
    </ToggleButtonGroup>
  )
  
}

export default ClearFilters;