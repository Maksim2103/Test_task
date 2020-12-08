import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Nationality: {
    width: '100%',
  },
}));

export default function SearchNationality() {
  const classes = useStyles();
  return (
    <TextField
      className={classes.Nationality}
      id="outlined-basic"
      label="Nationality"
      variant="outlined"
    />
  );
}
