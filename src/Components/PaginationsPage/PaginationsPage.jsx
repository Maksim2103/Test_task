import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
}));

export default function PaginationsPage({ handlerPageNumber, pageCount }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={pageCount}
        shape="rounded"
        onClick={(e) => {
          handlerPageNumber(e.target.innerText);
        }}
      />
    </div>
  );
}
