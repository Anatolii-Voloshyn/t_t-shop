import React from 'react';
import { makeStyles, FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
  root:{
    '&$checked': {
      color: '#000',
    },
  },

  checked: {},
  wrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 0,
  },
  label: {
    fontSize: '0.8rem',
    fontFamily: `'Roboto', sans-serif`,
  }
})

const CheckboxProton = ({color, changeChecked}) => {
  const classes = useStyles()
  const {checked, label, id} = color;

  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap
        }}
        control={
          <Checkbox 
            classes={{
              checked: classes.checked,
              root: classes.root
            }}

            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }

        label={label}
      />
    </div>
  )
}

export default CheckboxProton