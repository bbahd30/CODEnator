// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import { get_table_api } from '../../Links';
// import { get_tables_api } from "../../Links";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const TableRenderer = () =>
// {
//   const [table, setTable] = useState(null);

//   const fetchTableData = () =>
//   {
//     const url = get_tables_api;
//     axios
//       .get(url)
//       .then((response) =>
//       {
//         if (response.status == 200 || response.status == 201)
//         {
//           setTable(response.data);
//         }
//       })
//       .catch((error) =>
//       {
//         console.log(error);
//       });
//   };

//   useEffect(() =>
//   {
//     fetchTableData();
//   }, []);

//   useEffect(() =>
//   {
//     if (!table)
//     {
//       fetchTableData();
//     }
//   });

//   useEffect(() =>
//   {
//     const componentCode = navbar.opening_tag + navbar.text + navbar.closing_tag;
//   }, [navbar])

//   const componentCode = table.opening_tag + table.text + table.closing_tag;


//   return (
//     <TableContainer component={Paper}>
//       <Table >
//         <TableHead>
//           <TableRow>
//             {table.head_col.map((col) => (
//               <TableCell align="center">{col}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {table.row_data.map((row) =>
//           (
//             <TableRow>
//               {
//                 row.split(" ").map((row_in_col) => (
//                   <TableCell key={row_in_col} align="center">{row_in_col}</TableCell>
//                 ))
//               }
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//   );
// };

// export default TableRenderer;
