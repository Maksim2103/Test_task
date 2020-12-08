import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Typography,
  TableBody,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  footerTableContainer: {
    width: '500px',
  },
  typographyPredominate: {
    backgroundColor: 'yellow',
    marginLeft: '170px',
    width: '130px',
    fontSize: '14px',
  },
  rowFirstTable: {
    fontSize: '24px',
  },
  tableCellGender: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  if (props.contacts.isLoading) {
    return <div>...Loading</div>;
  }

  if (props.contacts.isError) {
    return <div>...Error</div>;
  }

  const genderCollections = props.contacts.data.reduce(
    (acc, el) => {
      switch (el.gender) {
        case 'male':
          return { ...acc, male: acc.male + 1 };
        case 'female':
          return { ...acc, female: acc.female + 1 };
        case 'indeterminate':
          return { ...acc, indeterminate: acc.indeterminate + 1 };
        default:
          return acc;
      }
    },
    { male: 0, female: 0, indeterminate: 0 }
  );

  const genderPredominate = () => {
    if (maleNum > femaleNum && maleNum > indeterminateNum) {
      return 'male';
    }
    if (maleNum < femaleNum && femaleNum > indeterminateNum) {
      return 'female';
    }
    if (maleNum < indeterminateNum && indeterminateNum > femaleNum) {
      return 'inderminate';
    }
    return 'Nobody';
  };

  const allNum = props.contacts.data.length;
  const maleNum = genderCollections.male;
  const femaleNum = genderCollections.female;
  const indeterminateNum = genderCollections.indeterminate;

  return (
    <Paper>
      <div className={classes.footerContainer}>
        <div className={classes.footerTableContainer}>
          <TableContainer>
            <Typography variant="h4">Statictic</Typography>
            <Table>
              <TableBody>
                <TableRow className={classes.rowFirstTable}>
                  <TableCell>Collections size </TableCell>
                  <TableCell>Males</TableCell>
                  <TableCell>Females</TableCell>
                  <TableCell>Indeterminate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableCellGender}>
                    {allNum}
                  </TableCell>
                  <TableCell className={classes.tableCellGender}>
                    {maleNum}
                  </TableCell>
                  <TableCell className={classes.tableCellGender}>
                    {femaleNum}
                  </TableCell>
                  <TableCell className={classes.tableCellGender}>
                    {indeterminateNum}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography className={classes.typographyPredominate}>
            {genderPredominate()} predominate
          </Typography>
        </div>
        <div>
          <Typography>Nationality</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Footer;
