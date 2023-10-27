import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const ResultsPage = ({rows}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    

    return (  
      

<Paper sx={{ width: '100%' }}>
    <TableContainer component={Paper} >
    <Table size="small" tickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Date</TableCell>
          <TableCell align="left">Celcius</TableCell>
          <TableCell align="left">Farenheit</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.date}</TableCell>
            <TableCell align="left">{row.tempC}</TableCell>
            <TableCell align="left">{row.tempF}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
   <TablePagination
   rowsPerPageOptions={[10, 25, 100]}
   component="div"
   count={rows.length}
   rowsPerPage={rowsPerPage}
   page={page}
   onPageChange={handleChangePage}
   onRowsPerPageChange={handleChangeRowsPerPage}
 />
 </Paper>
    )
}


export default ResultsPage;