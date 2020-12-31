import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import TableNationality from '../TableNationality/TableNationality';
import CopyToClipBoard from '../CopyToClipboardText/CopyToClipBoardText';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    fontSize: '16px',
  },
});

export default function ContactsTable({ data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Birthday</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((person) => (
            <TableRow key={person.login.uuid}>
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
                <CopyToClipBoard text={person.cell}></CopyToClipBoard>
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
