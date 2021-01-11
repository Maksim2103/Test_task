import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

import TableNationality from '../TableNationality/TableNationality';
import CopyToClipBoard from '../CopyToClipboardText/CopyToClipBoardText';
import EnhancedTableHead from './EnhancedTableHead/EnhancedTableHead';

import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    fontSize: '16px',
  },
});

function descendingComparator(a, b, orderBy) {
  if (orderBy === 'phone' || orderBy === 'email') {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  if (orderBy === 'last') {
    if (b.name.last < a.name.last) {
      return -1;
    }
    if (b.name.last > a.name.last) {
      return 1;
    }
    return 0;
  }
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function ContactsTable({ data }) {
  const classes = useStyles();

  const [order, setOrder] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortData = stableSort(data, getComparator(order, orderBy));

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-labelledby="tableTitle"
        aria-label="enhanced table"
        size="small"
      >
        <EnhancedTableHead
          onRequestSort={handleRequestSort}
          order={order}
          orderBy={orderBy}
        />
        <TableBody>
          {sortData.map((person) => (
            <TableRow hover tabIndex={-1} key={person.login.uuid}>
              <TableCell component="th" scope="row">
                <Avatar src={person.picture.thumbnail} />
              </TableCell>
              <TableCell align="left">
                {person.name.title} {person.name.first} {person.name.last}
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                <Typography>
                  {format(parseISO(person.dob.date), 'EEEE, M/d/yyyy, K-mm a')}
                </Typography>
                <Typography>{person.dob.age} years</Typography>
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                <CopyToClipBoard text={person.email}></CopyToClipBoard>{' '}
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                <CopyToClipBoard text={person.phone}></CopyToClipBoard>
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                <Typography>/{person.location.country}/</Typography>
                <Typography>
                  {person.location.state}, {person.location.city},
                </Typography>
                <Typography>
                  {person.location.street.name}
                  {person.location.street.number}
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                <TableNationality person={person.nat} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
