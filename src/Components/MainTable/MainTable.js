import ContactsTable from "../ContactsTable/ContactsTable";
import { Paper } from "@material-ui/core";

const MainTable = (props) => {
  if (props.contacts.isLoading) {
    return <div>...Loading</div>;
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
