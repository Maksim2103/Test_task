import { NATIONALITIES } from '../../Constats/Nationalities/nationalities';
import Box from '@material-ui/core/Box';

const TableNationality = ({ person }) => {
  const bgcolor = NATIONALITIES[person].bgcolor;
  const color = NATIONALITIES[person].color;

  return (
    <Box
      bgcolor={bgcolor}
      color={color}
      border={`1px solid ${color}`}
      textAlign="center"
    >
      {NATIONALITIES[person].nat}
    </Box>
  );
};
export default TableNationality;
