import { useState, useCallback } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '300px',
  },
}));

export default function AutocompleteCustom({
  onChange,
  label,
  keyVal,
  options,
}) {
  const classes = useStyles();

  const [value, setValue] = useState('');

  const onInputChange = useCallback(
    (e, value, reason) => {
      if (['reset', 'input'].includes(reason)) {
        onChange(value, keyVal);
        console.log('keyVal', keyVal);
        setValue(value);
      }
      if (reason === 'clear') {
        onChange(undefined, keyVal);
        setValue('');
      }
    },
    [setValue, keyVal, onChange]
  );

  return (
    <Autocomplete
      className={classes.root}
      value={value}
      options={options}
      getOptionSelected={(option) => option}
      onInputChange={onInputChange}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
}
