import ContactsTable from '../ContactsTable/ContactsTable';
import { Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const MainTable = (props) => {
  if (props.contacts.isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (props.contacts.isError) {
    return <div>...Error</div>;
  }

  return (
    <Paper elevation={3}>
      <ContactsTable data={props.contacts.data} />
    </Paper>
  );
};

export default MainTable;
