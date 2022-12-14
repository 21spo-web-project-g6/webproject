import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
import axios from "axios";
import { useEffect, useState } from "react";
import GraphCSS from './Graph.module.css'

const URL = "http://localhost:3001/9";

function V5() {
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
        label: "V5 Vostok Ice Core CO2 measurements, 417160 - 2342 years ",
        data: tasks,
        borderColor: "rgba(191, 8, 242, 0.8)",
        backgroundColor: "rgba(191, 8, 242, 0.8)",
        borderWidth: 3,
        parsing: {
          xAxisKey: "AirAge",
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
        text: "V5",
      },
    },

    scales: {
      y: {
        ticks: {
          // Include a ppmv sign in the ticks
          callback: function (value, index, ticks) {
            return value;


          }
        },
        type: "linear",
        title: {

          color: '#b2becd',
          display: true,
          text: 'CO2 concentration ppmv'
        },


      },
      x: {
        ticks: {
          // Include a BP sign in the ticks
          callback: function (value, index, ticks) {
            return value;



          }
        },
        min: 2342,
        max: 417160,
        type: "linear",
        reverse: true,
        displayFormats: {
          AirAge: 'Airage',
        },
        title: {
          color: '#b2becd',
          display: true,
          text: 'BP (Before Present)'
        },
        position: "bottom",
      },

    },
  };

  return (
    <div className={GraphCSS.container}>
      <Line options={options} data={data} />
      <div className={GraphCSS.sourceData}>
      <h2><p>Historical carbon dioxide record from the Vostok Ice Core is a ice-drilling project that reveals carbon dioxide data from over 400k years.</p></h2>
        <h1><a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">Link</a> to data sources. </h1>
        <h1><a href="https://www.nature.com/articles/nature03265">Full study</a> which includes data measurement description.</h1>
      </div>
    </div>
  );
}

export default V5;

//DATAN TESTAUKSEEN
// {tasks.map((task) => (
//     <p>
//       {task.Id} {task.AirAge} {task.Co2}

//     </p>
//   ))}