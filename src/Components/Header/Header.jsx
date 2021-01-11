import { useEffect } from 'react';

import { Box, Grid, Typography } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { Button } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    '&$selected': {
      backgroundColor: theme.palette.info.light,
      '&:hover': {
        backgroundColor: theme.palette.info.main,
      },
    },
  },
  selected: {},

  gridIcons: {
    padding: theme.spacing(1),
  },
  icons: {
    marginRight: theme.spacing(1),
  },
}));

const Header = ({ tableView, setTableView, reloadFetch }) => {
  const classes = useStyles();

  const handleChangeViewMode = (_, nextView) => {
    if (nextView !== null) {
      setTableView(nextView);
    }
  };

  useEffect(() => {
    localStorage.setItem('tableViewMode', tableView);
  }, [tableView]);

  const handleReloadPage = () => {
    reloadFetch();
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid className={classes.grid}>
        <Typography variant="h3">Contacts</Typography>
      </Grid>
      <Grid
        className={classes.gridIcons}
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Tooltip title="Reload page" arrow>
          <Button>
            <RefreshIcon
              className={classes.icons}
              fontSize="large"
              onClick={handleReloadPage}
            />
          </Button>
        </Tooltip>
        <ToggleButtonGroup
          value={tableView}
          exclusive
          onChange={handleChangeViewMode}
        >
          <ToggleButton
            classes={{ root: classes.root, selected: classes.selected }}
            value="grid"
            aria-label="grid"
          >
            <Tooltip title="Grid view" arrow>
              <ViewModuleIcon />
            </Tooltip>
          </ToggleButton>

          <ToggleButton
            classes={{ root: classes.root, selected: classes.selected }}
            value="table"
            aria-label="table"
          >
            <Tooltip title="Table view" arrow>
              <ViewListIcon />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Box>
  );
};

export default Header;
