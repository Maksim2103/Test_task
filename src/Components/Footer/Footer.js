import {
  Container,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Typography,
  TableBody,
} from '@material-ui/core';

const Footer = (props) => {
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
          return { ...acc, female: acc.male + 1 };
        case 'inderminate':
          return { ...acc, inderminate: acc.inderminate + 1 };
        default:
          return acc;
      }
    },
    { male: 0, female: 0, inderminate: 0 }
  );

  const allNum = props.contacts.data.length;
  const maleNum = genderCollections.male;
  const femaleNum = genderCollections.female;
  const indeterminateNum = genderCollections.inderminate;

  console.log(genderCollections);

  return (
    <Paper>
      <Container>
        <div>
          <TableContainer>
            <Typography>Statictic</Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Collections size </TableCell>
                  <TableCell>Males</TableCell>
                  <TableCell>Females</TableCell>
                  <TableCell>Indeterminate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{allNum}</TableCell>
                  <TableCell>{maleNum}</TableCell>
                  <TableCell>{femaleNum}</TableCell>
                  <TableCell>{indeterminateNum}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>predominate</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Typography>Nationality</Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
