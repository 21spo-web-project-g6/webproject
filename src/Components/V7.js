import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import axios from "axios";
import { useEffect, useState } from "react";

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
    labels: "Year",
    datasets: [
      {
        label: "Ice core 800k year composite study CO2 measurements",
        data: tasks,
        borderColor: "rgba(255, 141, 96, 0.8)",
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        borderWidth: 1,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
          yAxisID: 'y1',
        },
        pointRadius: 1,
      },
      {
        label: "Co2",
        data: tasks,
        borderColor: "rgba(15, 44, 233, 0.8)",
        backgroundColor: "rgba(15, 44, 233, 0.8)",
        borderWidth: 1,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Co2",
          yAxisID: 'y2',
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
        id:"y1",
        type: "linear",
        display: true,
        position: "left",
      },
      y2: {
        id:"y2",
        type: "linear",
        display: true,
        position: "right",
      },
      x: {
        type: "linear",
        position: "bottom",
      },
    },
  };

  return (
    <div style={{ width: "1000x" }}>
      <Line options={options} data={data} />
      <p>
        Ice core 800k year composite study shows carbon dioxide data from over
        800k years.
      </p>
      <h1><a href="http://carolynsnyder.com/papers/Snyder_Data_Figures.zip">Link to data sources.</a></h1>
      <h1><a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">Full details.</a></h1>
      {tasks.map((task) => (
        <p>
          {task.Id} {task.Year} {task.TempChange} {task.Co2}
        </p>
      ))}
    </div>
  );
}

export default V7;

//DATAN TESTAUKSEEN
