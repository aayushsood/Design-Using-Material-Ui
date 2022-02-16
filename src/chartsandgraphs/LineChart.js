import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
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
];

const datasets = [
  {
    label: "Amount",
    data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
    backgroundColor: "#0275d8",
    borderWidth: 3,
    borderColor: "#0275d8",
  },
];

const options = {
  //   maintainAspectRatio: false,
};

const data = { labels, datasets };

function LineChart() {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
