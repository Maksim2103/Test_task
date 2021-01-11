import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import SearchName from '../SearchPanel/SearhName/SearchName';
import AutocompleteCustom from '../AutocomleteCustom/AutocompleteCustom';
import { NATIONALITIES } from '../../Constats/Nationalities/nationalities';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  containerGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '70%',
  },
  itemFilter: {
    flexGrow: 1,
  },
}));

export default function SearchPanel({
  setFiltered,
  getFullName,
  helperOnChangeFilter,
}) {
  const classes = useStyles();

  const handleResetFiltersAll = () => {
    setFiltered();
  };

  const nationalityList = Object.entries(NATIONALITIES).map(
    (key) => key[1].nat
  );

  return (
    <Paper>
      <Grid className={classes.root}>
        <Grid container spacing={2} className={classes.containerGrid}>
          <Grid item className={classes.itemFilter}>
            <SearchName getFullName={getFullName} />
          </Grid>
          <Grid item className={classes.itemFilter}>
            <AutocompleteCustom
              options={['male', 'female']}
              keyVal={'gender'}
              label={'Gender'}
              onChange={helperOnChangeFilter}
            />
          </Grid>
          <Grid item className={classes.itemFilter}>
            <AutocompleteCustom
              options={nationalityList}
              keyVal={'nat'}
              label={'Nationality'}
              onChange={helperOnChangeFilter}
            />
          </Grid>
        </Grid>
        <Grid>
          <Tooltip title="Reset filters" arrow placement="top">
            <IconButton onClick={handleResetFiltersAll}>
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
}
