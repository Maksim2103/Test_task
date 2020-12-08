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

export default function Paginations() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={2} shape="rounded" />
    </div>
  );
}
