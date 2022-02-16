import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BarChart from "../chartsandgraphs/BarChart";
import DoughnutChart from "../chartsandgraphs/DoughnutChart";
import LineChart from "../chartsandgraphs/LineChart";
import MandateTable from "../tables/MandateTable";
import TableOne from "../tables/TableOne";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  chartButton: {
    backgroundColor: "#b0bec5",
    color: "#000000",
    textTransform: "capitalize",
    "&:hover": {
      background: "grey",
    },
  },
});
function CardsGraphsLayout() {
  const [showBarChart, setshowBarChart] = useState(true);
  const classes = useStyles();
  return (
    <Box mt={4} ml={2} mr={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", textTransform: "capitalize" }}
                >
                  total amount generated
                </Typography>
                <Box>
                  <Button
                    className={showBarChart ? classes.chartButton : ""}
                    variant="contained"
                    sx={{
                      marginRight: "0.5rem",
                      marginBottom: "0.5rem",
                      textTransform: "capitalize",
                    }}
                    onClick={() => {
                      setshowBarChart(false);
                    }}
                  >
                    Line Chart
                  </Button>
                  <Button
                    variant="contained"
                    className={showBarChart ? "" : classes.chartButton}
                    sx={{ textTransform: "capitalize", marginBottom: "0.5rem" }}
                    onClick={() => {
                      setshowBarChart(true);
                    }}
                  >
                    Bar Chart
                  </Button>
                </Box>
              </Box>
              {showBarChart ? (
                <BarChart setshowBarChart={setshowBarChart} />
              ) : (
                <LineChart />
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ overflowY: "scroll", height: "400px" }}>
          <TableOne />
        </Grid>
        <Grid item xs={12} md={6}>
          <MandateTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <DoughnutChart />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardsGraphsLayout;
