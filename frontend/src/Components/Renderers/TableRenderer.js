// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import { get_table_api } from '../../Links';
// import { get_tables_api } from '../../Links';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const TableRenderer = () =>
// {
//     const [table, setTable] = useState([]);

//     const fetchTableData = () =>
//     {
//         const url = get_tables_api;
//         axios
//             .get
//             (
//                 url
//             )
//             .then
//             ((response) =>
//             {
//                 if (response.status == 200 || response.status == 201)
//                 {
//                     setTable(response.data)
//                 }
//             })
//             .catch((error) =>
//             {
//                 console.log(error);
//             });
//     }

//     useEffect(() =>
//     {
//         fetchTableData();
//     }, []);

//     useEffect(() =>
//     {
//         const componentCode = table.opening_tag + table.text + table.closing_tag;
//         // todo: need to add this to a file
//     }, [table])

//     return (
//         // <div>
//         //     <table style={{textAlign: "center",margin:"30px",fontSize:"20px"}}>
//         //         {table.text}
//         //     </table>
//         // </div>

//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         <StyledTableCell>
                            
//                         </StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <StyledTableRow key={row.name}>
//                             <StyledTableCell component="th" scope="row">
//                                 {row.name}
//                             </StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

// export default TableRenderer;