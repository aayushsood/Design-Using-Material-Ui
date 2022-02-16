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
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import CancelIcon from "@mui/icons-material/Cancel";
import { Check } from "@mui/icons-material";
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

function createData(srNo, companyTitle, dateAndTime, status) {
  return { srNo, companyTitle, dateAndTime, status };
}

const rows = [
  createData(
    "01",
    "Waves",

    { date: " 20 Feb 2020", time: " 9:19" },
    " Pending"
  ),
  createData(
    "02",
    "HLC",
    { date: " 20 Feb 2020", time: " 9:19" },
    " Delivered"
  ),
  createData(
    "03",
    "Adidas",
    { date: " 20 Feb 2020", time: " 9:19" },
    " Canceled"
  ),
  createData(
    "04",
    "HLC",
    { date: " 20 Feb 2020", time: " 9:19" },
    " Delivered"
  ),
  createData(
    "05",
    "Infosys",
    { date: " 20 Feb 2020", time: " 9:19" },
    " Pending"
  ),
  createData("06", "HLC", { date: " 20 Feb 2020", time: " 9:19" }, " Canceled"),
  // createData('03', 'Infosys', '2,00,000', 210),
  // createData('03', 'Infosys', '2,00,000', 210),
  // createData('03', 'Infosys', '2,00,000', 210),
];

const getTheRowStatus = (rowStatus) => {
  if (rowStatus === " Pending") return <PendingIcon color="warning" />;
  else if (rowStatus === " Canceled")
    return <CancelIcon sx={{ color: "red" }} />;
  else return <CheckCircleIcon color="success" />;
};

function MandateTable() {
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
            mandate table
          </Typography>
        </Box>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sr No.</StyledTableCell>
              <StyledTableCell align="right">Company Title</StyledTableCell>
              <StyledTableCell align="right">Date And Time</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.srNo}>
                <StyledTableCell component="th" scope="row">
                  {row.srNo}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.companyTitle}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "right",
                    }}
                  >
                    <CalendarTodayOutlinedIcon />
                    {" " + row.dateAndTime.date}
                    <AccessTimeOutlinedIcon sx={{ marginLeft: "0.5rem" }} />
                    {" " + row.dateAndTime.time}
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "right",
                    }}
                  >
                    {getTheRowStatus(row.status)}
                    {row.status}
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MandateTable;
