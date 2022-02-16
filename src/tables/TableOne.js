import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(srNo, companyName, amount, noOfMandates) {
  return { srNo, companyName, amount, noOfMandates };
}

const rows = [
  createData("01", "Infosys", "2,00,000", 210),
  createData("02", "HLC", "2,00,000", 101),
  createData("03", "Infosys", "2,00,000", 210),
  createData("04", "HLC", "2,00,000", 101),
  createData("05", "Infosys", "2,00,000", 210),
  createData("06", "HLC", "2,00,000", 101),
  createData("07", "HLC", "2,00,000", 101),
  createData("08", "HLC", "2,00,000", 101),
  // createData('03', 'Infosys', '2,00,000', 210),
  // createData('03', 'Infosys', '2,00,000', 210),
  // createData('03', 'Infosys', '2,00,000', 210),
];

function TableOne() {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
              textAlign: "left",
              marginLeft: "0.7rem",
              marginTop: "1rem",
            }}
          >
            Total Amount Generated
          </Typography>
        </Box>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sr No.</StyledTableCell>
              <StyledTableCell align="right">Company Name</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">No. Of Mandates</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.srNo}>
                <StyledTableCell component="th" scope="row">
                  {row.srNo}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.companyName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.noOfMandates}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TableOne;
