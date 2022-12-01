import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import axios from "axios";
import { useEffect, useState } from "react";

import GraphCSS from '../Styles/Graph.module.css'

const URL = "http://localhost:3001/11";

function V7() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);
  
  const data = {
    labels: tasks,
    datasets: [
      {
        label: "Change in Global Average Surface Temperature (GAST) from present (0-5ka average)",
        data: tasks,
        borderColor: "rgba(255, 141, 96, 0.8)",
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        borderWidth: 1,
        yAxisID: 'y1',
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Carbon dioxide (ppm) 0-800k BP",
        data: tasks,
        borderColor: "rgba(15, 44, 233, 0.8)",
        backgroundColor: "rgba(15, 44, 233, 0.8)",
        borderWidth: 1,
        yAxisID: 'y2',
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Co2",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "V7",
      },
    },

    scales: {
      y1: {
        type: "linear",
        position: "left",
        min: -7.5,
        max: 2.5,
        title: {
            display: true,
            color: "red",
            text: 'Temperature change'
          }
      },
      y2: {
        type: "linear",
        position: "right",
        min:140,
        max:300,
        title: {
            display: true,
            color: "red",
            text: 'Carbon dioxide (ppm)'
          },
      },
      x: {
        type: "linear",
        position: "bottom",
        title: {
            display: true,
            color: "red",
            text: 'Before Present (BP)'
          },
      },
    },
  };

  return (
    <div className={GraphCSS.container}>
      <Line options={options} data={data} />
      <p>
        Ice core 800k year composite study shows carbon dioxide data from over
        800k years.
      </p>
      <h1><a href="http://carolynsnyder.com/papers/Snyder_Data_Figures.zip">Link</a> to data sources.</h1>
      <h1>Full <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">details.</a></h1>
    </div>
  );
}

export default V7;

//DATAN TESTAUKSEEN
// {tasks.map((task) => (
//     <p>
//       {task.Id} {task.Year} {task.TempChange} {task.Co2}
//     </p>
//   ))}