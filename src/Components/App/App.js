import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import SearchAppBar from '../SearchPanel/SearchPanel';
import MainTable from '../MainTable/MainTable';
import Footer from '../Footer/Footer';
import Grid from '@material-ui/core/Grid';
import { useContacts } from './useContacts';
import Paginations from '../Paginations/Paginations';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  appGrid: {
    padding: theme.spacing(4),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const contacts = useContacts();

  return (
    <div className={classes.root}>
      <Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <Header />
        </Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <SearchAppBar />
        </Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <MainTable contacts={contacts} />
        </Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <Footer contacts={contacts} />
        </Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <Paginations contacts={contacts} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
