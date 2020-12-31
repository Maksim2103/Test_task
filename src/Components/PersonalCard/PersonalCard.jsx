import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TableNationality from '../TableNationality/TableNationality';
import CopyToClipBoard from '../CopyToClipboardText/CopyToClipBoardText';

import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    minWidth: '45%',
    maxWidth: '45%',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  cardnameContainer: {
    margin: theme.spacing(2),
  },
}));

export default function PersonalCard({ data }) {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      {data.map((person) => (
        <Box key={person.login.uuid} className={classes.cardContainer}>
          <Avatar className={classes.large} src={person.picture.large} />
          <Box className={classes.cardnameContainer}>
            <Typography variant="h3">
              {person.name.title} {person.name.first} {person.name.last}
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Birthday</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell aalign="center">Phone</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Nationality</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.tableCell} align="left">
                    <Typography>
                      {format(
                        parseISO(person.dob.date),
                        'EEEE, M/d/yyyy, K-mm a'
                      )}
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
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
}
