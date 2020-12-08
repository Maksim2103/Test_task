import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchName from '../SearchPanel/SearhName/SearchName';
import SearchGender from '../SearchPanel/SearchGender/SearchGender';
import SearchNationality from '../SearchPanel/SearchNationality/SearchNationality';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  searchPanelGrid: {
    padding: theme.spacing(2),
  },
  searchPanelGridName: {
    minWidth: '35%',
    margin: theme.spacing(2),
  },
  searchPanelGridGender: {
    minWidth: '15%',
    margin: theme.spacing(2),
  },
  searchPanelGridNationality: {
    minWidth: '20%',
    margin: theme.spacing(2),
  },
  searchPanelGridButton: {
    paddingLeft: '400px',
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.searchPanelGrid}
        >
          <Grid className={classes.searchPanelGridName}>
            <SearchName />
          </Grid>
          <Grid className={classes.searchPanelGridGender}>
            <SearchGender />
          </Grid>
          <Grid className={classes.searchPanelGridNationality}>
            <SearchNationality />
          </Grid>
          <Grid className={classes.searchPanelGridButton}>
            <Button>X Clear</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
