import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  inputName: {
    width: '100%',
  },
}));

export default function SearchName() {
  const classes = useStyles();

  return (
    <TextField
      className={classes.inputName}
      variant="outlined"
      id="input-with-icon-textfield"
      label="Search by full name"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
