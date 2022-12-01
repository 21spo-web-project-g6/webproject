import { chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import axios from "axios";
import { useEffect, useState } from "react";

import GraphCSS from '../Styles/Graph.module.css'

const URL13 = "http://localhost:3001/13";
const URL14 = "http://localhost:3001/14";
const URL15 = "http://localhost:3001/15";

function V9() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(URL13)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);
  
  useEffect(() => {
    axios
      .get(URL14)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(URL15)
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
        label: "Energy",
        data: tasks,
        borderColor: "rgba(255, 141, 96, 0.8)",
        backgroundColor: "rgba(255, 141, 96, 0.8)",

      },
      {
        label: "Industrial processes",
        data: tasks,
        borderColor: "rgba(15, 44, 233, 0.8)",
        backgroundColor: "rgba(15, 44, 233, 0.8)",          
      },
      {
        label: "Waste",
        data: tasks,
        borderColor: "rgba(15, 44, 233, 0.8)",
        backgroundColor: "rgba(15, 44, 233, 0.8)",
        
      },
      {
        label: "Agriculture, Forestry & Land Use (AFOLU)",
        data: tasks,
        borderColor: "rgba(15, 44, 233, 0.8)",
        backgroundColor: "rgba(15, 44, 233, 0.8)",
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: tasks,
  };

  return (
    <div className={GraphCSS.container}>
      <Pie options={config} data={data} />
      <p>
        Ice core 800k year composite study shows carbon dioxide data from over
        800k years.
      </p>
      <h1><a href="http://carolynsnyder.com/papers/Snyder_Data_Figures.zip">Link</a> to data sources.</h1>
      <h1>Full <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">details.</a></h1>
    </div>
  );
}

export default V9;

//DATAN TESTAUKSEEN
// {tasks.map((task) => (
//     <p>
//       {task.Id} {task.Year} {task.TempChange} {task.Co2}
//     </p>
//   ))}