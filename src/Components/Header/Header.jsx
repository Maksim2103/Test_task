import { Box, Grid, Typography } from "@material-ui/core";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    padding: theme.spacing(2),
  },
  icons: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [view, setView] = useState("list");

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
      <Grid className={classes.grid}>
        <RefreshIcon className={classes.icons} fontSize="large" />
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
