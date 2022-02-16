import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ElevatorSharp } from "@mui/icons-material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Jan- 12 Invoices Generated",
    "Feb- 19 Invoices Generated",
    "Mar- 30 Invoices Generated",
  ],
  datasets: [
    {
      label: "Invoices Generated",
      data: [12, 19, 30],
      backgroundColor: ["#0275d8", "#f0ad4e", "#5cb85c"],
      // borderColor: ["none", "none", "none"],
      borderWidth: 0,
    },
  ],
};

function DoughnutChart() {
  const [cutOut, setcutOut] = useState(70);

  const initialCutOut = () => {
    if (window.innerWidth > 375) {
      setcutOut(70);
    } else {
      setcutOut(30);
    }
  };

  useEffect(() => {
    initialCutOut();
  }, []);

  // initialCutOut();
  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 375) {
      setcutOut(70);
    } else {
      setcutOut(30);
    }
  });

  const options = {
    cutout: cutOut,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        //   align: "right",
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <Box>
            <Typography
              variant="h5"
              sx={{ textTransform: "capitalize", textAlign: "left" }}
            >
              invoices generated
            </Typography>
          </Box>
          <Box
            sx={{
              width: { sx: "300px", md: "400px" },
              height: "350px",
              marginTop: "1.5rem",
            }}
          >
            <Doughnut options={options} data={data} />
          </Box>
          {/* <Typography
            variant="h5"
            sx={{
              textTransform: "capitalize",
              textAlign: "left",
              marginTop: "-3rem",
            }}
          >
            invoices generated table
          </Typography> */}
        </CardContent>
      </Card>
    </Box>
  );
}

export default DoughnutChart;
