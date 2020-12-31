import { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const genderList = ['Male', 'Female'];

export default function SearchGender({ getGenderValue }) {
  const [genderValue, setGenderValue] = useState('');

  const onChange = useCallback(
    (e, value, reason) => {
      setGenderValue(value);
      getGenderValue(value, reason);
    },
    [getGenderValue]
  );
  return (
    <Autocomplete
      value={genderValue}
      options={genderList}
      getOptionSelected={(option) => option}
      onInputChange={onChange}
      renderInput={(params) => (
        <TextField {...params} label="Gender" variant="outlined" />
      )}
    />
  );
}
