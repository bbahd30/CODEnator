import React, { useEffect, useState } from "react";
import axios from "axios";
// import { get_table_api } from '../../Links';
import { get_tables_api } from "../../Links";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableRenderer = () => {
  const [table, setTable] = useState([]);

  const fetchTableData = () => {
    const url = get_tables_api;
    axios
      .get(url)
      .then((response) => {
        if (response.status == 200 || response.status == 201) {
          setTable(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  useEffect(() => {
    const componentCode = table.opening_tag + table.text + table.closing_tag;
    // todo: need to add this to a file
  }, [table]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {table.head_col.map((col) => (
              <TableCell align="right">{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {table.row_data.map((row) => {
            let arr = row.split(" ");
            arr.map((row_in_col) => (
              <TableCell align="right">{row_in_col}</TableCell>
            ));
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableRenderer;
