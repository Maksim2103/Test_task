import './App.css';
import { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import SearchAppBar from '../SearchPanel/SearchPanel';
import MainTable from '../MainTable/MainTable';
import Footer from '../Footer/Footer';
import Grid from '@material-ui/core/Grid';
import { useFetchData } from './useFetchData';
import PaginationsPage from '../PaginationsPage/PaginationsPage';
import { NATIONALITIES } from '../../Constats/Nationalities/nationalities';
import PersonalCard from '../PersonalCard/PersonalCard';
import { TABLE_VIEW_STATUS } from '../Constants/constants';

const useStyles = makeStyles((theme) => ({
  appGrid: {
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
  },
}));

const getTableViewMode = () => {
  return localStorage.getItem('tableViewMode') || TABLE_VIEW_STATUS.TABLE;
};

function App() {
  const classes = useStyles();
  const initialData = useFetchData();
  const [filtered, setFiltered] = useState();
  const [tableView, setTableView] = useState(getTableViewMode);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;
  const totalRows = initialData.data.length;
  const pageCount = Math.ceil(totalRows / rowsPerPage);

  const helperFilteredData3 = (data = [], activeFilters = {}) => {
    return data.reduce((acc, el) => {
      const valueActive = Object.entries(activeFilters).every(
        ([key, value]) => {
          if (!value) {
            return true;
          }
          const currentValue = el[key];
          if (typeof currentValue === 'object') {
            return Object.values(currentValue).join(' ').includes(value);
          }
          return `${el[key]}` === value;
        }
      );
      if (valueActive) {
        return [...acc, el];
      }
      return acc;
    }, []);
  };

  const Data = useMemo(() => {
    const helperFilteredData333 = helperFilteredData3(
      initialData.data,
      filtered
    );
    return {
      ...initialData,
      data: helperFilteredData333.slice(
        currentPage * rowsPerPage - rowsPerPage,
        currentPage * rowsPerPage
      ),
    };
  }, [initialData, filtered, currentPage]);

  const getGenderValue = (val, reason) => {
    if (reason === 'reset') {
      setFiltered({ ...filtered, gender: val.toLowerCase() });
    }
    if (reason === 'input') {
      setFiltered({ ...filtered, gender: val.toLowerCase() });
    }
    if (reason === 'clear') {
      setFiltered({ ...filtered, gender: undefined });
    }
  };

  const transformNationality = (val) => {
    let transformValue = Object.entries(NATIONALITIES).filter(
      (el) => el[1].nat === val
    );
    return transformValue[0][0];
  };

  const getNationalityValue = (val, reason) => {
    if (reason === 'reset') {
      const nationalities = transformNationality(val);
      setFiltered({ ...filtered, nat: nationalities });
    }
    if (reason === 'input') {
      const nationalities = transformNationality(val);
      setFiltered({ ...filtered, nat: nationalities });
    }
    if (reason === 'clear') {
      setFiltered({ ...filtered, nat: undefined });
    }
  };

  const getFullName = (name) => {
    if (name) {
      setFiltered({ ...filtered, name: name });
    }
  };

  const handlerPageNumber = (numPage) => {
    setCurrentPage(numPage);
  };

  return (
    <div className={classes.root}>
      <Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <Header
            tableView={tableView}
            setFiltered={setFiltered}
            setTableView={setTableView}
          />
        </Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <SearchAppBar
            getGenderValue={getGenderValue}
            getNationalityValue={getNationalityValue}
            setFiltered={setFiltered}
            getFullName={getFullName}
          />
        </Grid>
        <Grid className={classes.appGrid} item xs={12}>
          {tableView === TABLE_VIEW_STATUS.TABLE && (
            <MainTable
              data={Data.data}
              isLoading={Data.isLoading}
              isError={Data.isError}
              tableView={tableView}
            />
          )}
          {tableView === TABLE_VIEW_STATUS.GRID && (
            <PersonalCard
              data={Data.data}
              isLoading={Data.isLoading}
              isError={Data.isError}
              tableView={tableView}
            />
          )}
        </Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <Footer
            data={initialData.data}
            isLoading={Data.isLoading}
            isError={Data.isError}
          />
        </Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <PaginationsPage
            handlerPageNumber={handlerPageNumber}
            pageCount={pageCount}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
