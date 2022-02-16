import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ setshowBarChart }) {
  return (
    <Box>
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Amount",
              data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
              backgroundColor: "orange",
              borderWidth: 1,
            },
          ],
        }}
      />
    </Box>
  );
}

export default BarChart;
