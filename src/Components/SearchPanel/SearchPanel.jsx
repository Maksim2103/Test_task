import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchName from '../SearchPanel/SearhName/SearchName';
import SearchGender from '../SearchPanel/SearchGender/SearchGender';
import SearchNationality from '../SearchPanel/SearchNationality/SearchNationality';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

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

export default function SearchAppBar({
  getGenderValue,
  getNationalityValue,
  setFiltered,
  getFullName,
}) {
  const classes = useStyles();

  const handleResetFiltersAll = () => {
    setFiltered({});
  };

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
            <SearchName getFullName={getFullName} />
          </Grid>
          <Grid className={classes.searchPanelGridGender}>
            <SearchGender getGenderValue={getGenderValue} />
          </Grid>
          <Grid className={classes.searchPanelGridNationality}>
            <SearchNationality getNationalityValue={getNationalityValue} />
          </Grid>
          <Grid className={classes.searchPanelGridButton}>
            <Tooltip title="Reset filters" arrow placement="top">
              <IconButton onClick={handleResetFiltersAll}>
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
