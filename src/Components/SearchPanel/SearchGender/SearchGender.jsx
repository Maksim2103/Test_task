/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 13,
    border: 0,
    fontSize: 36,
    // height: 48,
  },
  label: {
    textTransform: "capitalize",
    color: "white",
  },
});

const genderList = [{ title: "Male" }, { title: "Female" }];

export default function SearchGender() {
  const classes = useStyles();

  return (
    <Autocomplete
      id="combo-box-demo"
      options={genderList}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="Gender" variant="outlined" />
      )}
    />
  );
}
