import { useCallback } from 'react';

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

export default function PaginationsPage({ onChange, pageCount }) {
  const classes = useStyles();

  const handleChangePage = useCallback(
    (_, page) => {
      onChange(page);
    },
    [onChange]
  );

  return (
    <div className={classes.root}>
      <Pagination
        count={pageCount}
        shape="rounded"
        onChange={handleChangePage}
      />
    </div>
  );
}
