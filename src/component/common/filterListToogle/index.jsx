import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    padding: '10px',
  },
  toggle: {
    padding: '10px',
    fontFamily: `'Roboto', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
      padding: '10px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      padding: '10px',
    },
    '&.Mui-selected': {
      borderRadius: '10px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      background: '#000',
      color: '#fff',
      padding: '10px',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: '#000',
        color: '#fff',
      },
    },
  },
});

const FilterListToggle = ({ options, value, selectToggle }) => {
  const classes = useStyles()

  return (
    <ToggleButtonGroup
      value={value}
      onChange={selectToggle}
      className={classes.root}
      exclusive
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton
          className={classes.toggle}
          key={id}
          value={value}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterListToggle