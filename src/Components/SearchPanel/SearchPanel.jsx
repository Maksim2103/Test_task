import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchName from "../SearchPanel/SearhName/SearchName";
import SearchGender from "../SearchPanel/SearchGender/SearchGender";
import SearchNationality from "../SearchPanel/SearchNationality/SearchNationality";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
  GridCont: {
    display: "flex",
    justyfyContent: "start",
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <SearchName />
          </Grid>
          <Grid item xs={3}>
            <SearchGender />
          </Grid>
          <Grid item xs={3}>
            <SearchNationality />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
