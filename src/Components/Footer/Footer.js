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
import Box from '@material-ui/core/Box';

import { NATIONALITIES } from '../../Constats/Nationalities/nationalities';
import { GENDER_VALUE } from '../Constants/constants';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: theme.spacing(2),
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
    width: '130px',
    fontSize: '14px',
    align: 'center',
  },
  typograthyBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  rowFirstTable: {
    fontSize: '24px',
  },
  tableCellGender: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
}));

const Footer = ({ data }) => {
  const classes = useStyles();

  const genderCollections = data.reduce(
    (acc, el) => {
      switch (el.gender) {
        case GENDER_VALUE.MALE:
          return { ...acc, male: acc.male + 1 };
        case GENDER_VALUE.FEMALE:
          return { ...acc, female: acc.female + 1 };
        case GENDER_VALUE.INDERMINATE:
          return { ...acc, indeterminate: acc.indeterminate + 1 };
        default:
          return acc;
      }
    },
    { male: 0, female: 0, indeterminate: 0 }
  );

  const genderPredominate = () => {
    if (maleNum > femaleNum && maleNum > indeterminateNum) {
      return GENDER_VALUE.MALE;
    }
    if (maleNum < femaleNum && femaleNum > indeterminateNum) {
      return GENDER_VALUE.FEMALE;
    }
    if (maleNum < indeterminateNum && indeterminateNum > femaleNum) {
      return GENDER_VALUE.INDERMINATE;
    }
    return GENDER_VALUE.NOBODY;
  };

  const allNum = data.length;
  const maleNum = genderCollections.male;
  const femaleNum = genderCollections.female;
  const indeterminateNum = genderCollections.indeterminate;

  const nationalitiesCollections = data.reduce(
    (acc, el) => {
      return { ...acc, [el.nat]: acc[el.nat] + 1 };
    },
    {
      AU: 0,
      BR: 0,
      CA: 0,
      CH: 0,
      DE: 0,
      DK: 0,
      ES: 0,
      FI: 0,
      FR: 0,
      GB: 0,
      IE: 0,
      IR: 0,
      NO: 0,
      NL: 0,
      NZ: 0,
      TR: 0,
      US: 0,
    }
  );

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
          <Box className={classes.typograthyBox}>
            <Typography className={classes.typographyPredominate}>
              {genderPredominate()} predominate
            </Typography>
          </Box>
        </div>
        <div>
          <Typography variant="h5">Nationality</Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {Object.entries(nationalitiesCollections)
              .filter(([_, value]) => value)
              .map(([key, value]) => {
                return (
                  <div key={key}>
                    <div>{NATIONALITIES[key].nat}:</div>
                    <div>{value} contacts</div>
                  </div>
                );
              })}
          </Box>
        </div>
      </div>
    </Paper>
  );
};

export default Footer;
