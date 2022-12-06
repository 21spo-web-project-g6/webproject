import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
import axios from "axios";
import { useEffect, useState } from "react";

import GraphCSS from '../Styles/Graph.module.css'

const URL1 = "http://localhost:3001/1";
const URL2 = "http://localhost:3001/2";
const URL3 = "http://localhost:3001/3";

export default function V1() {
  const [tasks1, setTasks1] = useState([]);
  const [tasks2, setTasks2] = useState([]);
  const [tasks3, setTasks3] = useState([]);
 
  useEffect(() => {
    axios
      .get(URL1)
      .then((response) => {
        //console.log(response.data);
        setTasks1(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(URL2)
      .then((response) => {
        //console.log(response.data);
        setTasks2(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(URL3)
      .then((response) => {
        //console.log(response.data);
        setTasks3(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);

  const data = {
    datasets: [
      {
        label: "Annual Global Anomaly",
        data: tasks2,
        borderColor: "rgba(191, 8, 242, 0.8)",
        backgroundColor: "rgba(191, 8, 242, 0.8)",
        borderWidth: 2,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyGlobalAnnually",
        },
        pointRadius: 1,
      },
      {
        label: "Annual Northern Anomaly",
        data: tasks2,
        borderColor: "rgba(232, 97, 12, 0.8)",
        backgroundColor: "rgba(232, 97, 12, 0.8)",
        borderWidth: 2,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyNorthernAnnually",
        },
        pointRadius: 1,
      },
      {
        label: "Annual Southern Anomaly",
        data: tasks2,
        borderColor: "rgba(30, 8, 242, 0.8)",
        backgroundColor: "rgba(30, 8, 242, 0.8)",
        borderWidth: 2,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalySouthernAnnually",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Global Anomaly",
        data: tasks1,
        borderColor: "rgba(11, 232, 59, 0.8)",
        backgroundColor: "rgba(11, 232, 59, 0.8)",
        borderWidth: 2,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyGlobalMonthly",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Northern Anomaly",
        data: tasks1,
        borderColor: "rgba(232, 11, 27, 0.8)",
        backgroundColor: "rgba(232, 11, 27, 0.8)",
        borderWidth: 2,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyNorthernMonthly",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Southern Anomaly",
        data: tasks1,
        borderColor: "rgba(232, 211, 11, 0.8)",
        backgroundColor: "rgba(232, 211, 11, 0.8)",
        borderWidth: 2,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalySouthernMonthly",
        },
        pointRadius: 1,
      },
      {
        label: "V2 Northern Hemisphere 2,000-year temperature reconstruction",
        data: tasks3,
        borderColor: "rgba(240, 20, 134, 0.8)",
        backgroundColor: "rgba(240, 20, 134, 0.8)",
        borderWidth: 2,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "T",
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
        text: "V1 Global historical surface temperature anomalies from January 1850 onwards + V2 Northern Hemisphere 2,000-year temperature reconstruction",
      },
    },

    scales: {
      yAxes: {
        type: "linear",
        
          
      },
      xAxes: {
        title: {
          color: "red",
          display: true,
          text: "Year",
          position: "bottom",
        },
        type: "time",
        displayFormats: {
          Year: 'Y',
          
          } ,
        position: "bottom",
      },
      
    },
  };

  return (
    <div className={GraphCSS.container}>
      <Line options={options} data={data} />
      <h1> <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">Link</a> to V1 data sources.</h1>
      <h1> <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">Link to V2 data sources.</a> </h1>
      <h1> <a href="https://www.nature.com/articles/nature03265">Full study of V2 which includes data measurement description.</a> </h1>
    </div>
  );
}

//DATAN TARKISTUKSEEN
/* {tasks1.map((task) => (
          <p>
            {task.Id} {task.Year} {task.AnomalyGlobalMonthly}{" "}
            {task.AnomalyNorthernMonthly} {task.AnomalySouthernMonthly}
          </p>
        ))}

        {tasks2.map((task2) => (
          <p>
            {task2.Id} {task2.Year} {task2.AnomalyGlobalAnnually}{" "} 
            {task2.AnomalyNorthernAnnually} {task2.AnomalySouthernAnnually}
          </p>
        ))} */

        /* {tasks3.map((task3) => (
          <p>
            {task3.Id} {task3.Year} {task3.T}
            
          </p>
        ))} */