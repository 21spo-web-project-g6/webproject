import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
import axios from "axios";
import { useEffect, useState } from "react";
import GraphCSS from './Graph.module.css'

const URL = "http://localhost:3001/10";

function V6() {
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
    datasets: [
      {
        label: "Ice core 800k year composite study CO2 measurements",
        data: tasks,
        borderColor: "rgba(150, 255, 247, 0.8)",
        backgroundColor: "rgba(150, 255, 247, 0.8)",
        borderWidth: 2,
        parsing: {
          xAxisKey: "AgeGasCalBP",
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
        text: "V6",
      },
    },

    scales: {
      y: {
        ticks: {
          // Include a ppmv sign in the ticks
          callback: function (value, index, ticks) {
            return value + ' ppmv';
          }
        },
        type: "linear",
        title: {
          color: 'red',
          display: true,
          text: 'CO2 concnertation ppmv'
        },


      },
      x: {
        min: -803918.87,
        max: 2002,
        type: "linear",
        reverse: false,
        displayFormats: {
          AirAge: 'Airage',
        },
        title: {
          color: 'red',
          display: true,
          text: 'Year'
        },
        position: "bottom",
      },

    },
  };

  return (
    <div className={GraphCSS.container}>
      <Line options={options} data={data} />
      <div className={GraphCSS.sourceData}>
        <p>Ice core 800k year composite study shows carbon dioxide data from over 800k years. </p>
        <h1> <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt">Link</a> to data sources.</h1>
        <h1> <a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975">Full details.</a> </h1>
      </div>
    </div>
  );
}

export default V6;

//DATAN TESTAUKSEEN
// {tasks.map((task) => (
//     <p>
//       {task.Id} {task.AirAge} {task.Co2}

//     </p>
//   ))}