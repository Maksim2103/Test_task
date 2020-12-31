import { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { NATIONALITIES } from '../../../Constats/Nationalities/nationalities';

const useStyles = makeStyles((theme) => ({
  Nationality: {
    width: '100%',
  },
}));

export default function SearchNationality({ getNationalityValue }) {
  const classes = useStyles();

  const [nationalityValue, setNationalityValue] = useState('');

  const onChange = useCallback(
    (e, value, reason) => {
      setNationalityValue(value);
      getNationalityValue(value, reason);
    },
    [getNationalityValue]
  );

  const nationality = Object.entries(NATIONALITIES).map((key) => key[1].nat);

  return (
    <Autocomplete
      value={nationalityValue}
      className={classes.Nationality}
      onInputChange={onChange}
      options={nationality}
      getOptionSelected={(option) => option}
      renderInput={(params) => (
        <TextField {...params} label="Nationality" variant="outlined" />
      )}
    />
  );
}
