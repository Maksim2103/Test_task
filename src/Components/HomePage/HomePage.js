import { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import ContactsTable from '../ContactsTable/ContactsTable';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import Footer from '../Footer/Footer';
import PersonalCard from '../PersonalCard/PersonalCard';
import PaginationsPage from '../PaginationsPage/PaginationsPage';
import { useFetchData } from './useFetchData';
import { NATIONALITIES } from '../../Constats/Nationalities/nationalities';
import { TABLE_VIEW_STATUS } from '../Constants/constants';

const { TABLE, GRID } = TABLE_VIEW_STATUS;

const useStyles = makeStyles((theme) => ({
  appGrid: {
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
  },
}));

const getTableViewMode = () => {
  return localStorage.getItem('tableViewMode') || TABLE;
};

function HomePage() {
  const classes = useStyles();
  const { data, isLoading, isError, reloadFetch } = useFetchData();
  const [filtered, setFiltered] = useState();
  const [tableView, setTableView] = useState(getTableViewMode);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  const helperFilteredData = (data = [], activeFilters = {}) => {
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

  const dataAfterFilter = useMemo(() => helperFilteredData(data, filtered), [
    data,
    filtered,
  ]);

  const dataPerPage = useMemo(
    () =>
      dataAfterFilter.slice(
        currentPage * rowsPerPage - rowsPerPage,
        currentPage * rowsPerPage
      ),
    [currentPage, rowsPerPage, dataAfterFilter]
  );

  const totalRows = useMemo(() => dataAfterFilter.length, [dataAfterFilter]);

  const pageCount = useMemo(() => Math.ceil(totalRows / rowsPerPage), [
    totalRows,
    rowsPerPage,
  ]);

  const transformNationality = (val) => {
    if (val) {
      let transformValue = Object.entries(NATIONALITIES).filter(
        (el) => el[1].nat === val
      );
      return transformValue[0][0];
    }
  };

  const helperOnChangeFilter = (val, key) => {
    if (key === 'gender') {
      setFiltered({ ...filtered, [key]: val });
      setCurrentPage(1);
    }
    if (key === 'nat') {
      const nationalities = transformNationality(val);
      setFiltered({ ...filtered, [key]: nationalities });
      setCurrentPage(1);
    }
  };

  const getFullName = (name) => {
    if (name) {
      setFiltered({ ...filtered, name: name });
      setCurrentPage(1);
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
            setTableView={setTableView}
            reloadFetch={reloadFetch}
          />
        </Grid>
        <Grid className={classes.appGrid} item xs={12}>
          <SearchPanel
            setFiltered={setFiltered}
            getFullName={getFullName}
            helperOnChangeFilter={helperOnChangeFilter}
          />
        </Grid>
        {isLoading ? (
          <Grid className={classes.appGrid} item xs={12}>
            <CircularProgress />
          </Grid>
        ) : isError ? (
          <Grid className={classes.appGrid} item xs={12}>
            ...Error
          </Grid>
        ) : (
          <>
            <Grid className={classes.appGrid} item xs={12}>
              {tableView === TABLE && <ContactsTable data={dataPerPage} />}
              {tableView === GRID && (
                <PersonalCard data={dataPerPage} tableView={tableView} />
              )}
            </Grid>
            <Grid className={classes.appGrid} item xs={12}>
              <Footer data={dataAfterFilter} />
            </Grid>
            {/* <ContactsTableCopy data={dataPerPage} /> */}
          </>
        )}
        <Grid className={classes.appGrid} item xs={12}>
          <PaginationsPage onChange={handlerPageNumber} pageCount={pageCount} />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
