import { Box, Grid, Typography } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { Button } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import RefreshIcon from '@material-ui/icons/Refresh';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  gridIcons: {
    padding: theme.spacing(1),
  },
  icons: {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [view, setView] = useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
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
        <Button>
          <RefreshIcon className={classes.icons} fontSize="large" />
        </Button>
        <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Box>
  );
};

export default Header;
