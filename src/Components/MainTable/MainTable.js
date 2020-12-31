import ContactsTable from '../ContactsTable/ContactsTable';
import { Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const MainTable = ({ data, isError, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return <div>...Error</div>;
  }

  return (
    <Paper elevation={3}>
      <ContactsTable data={data} />
    </Paper>
  );
};

export default MainTable;
