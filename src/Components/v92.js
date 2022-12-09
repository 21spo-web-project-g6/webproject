import { chart } from "chart.js/auto";
import { Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import axios from "axios";
import { useEffect, useState } from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

import GraphCSS from '../Styles/Graph.module.css'

const URL13 = "http://localhost:3001/13";
const URL14 = "http://localhost:3001/14";
const URL15 = "http://localhost:3001/15";

function V9() {
  const [tasks1, setTasks] = useState([]);
  const [tasks2, setTasks2] = useState([]);
  const [tasks3, setTasks3] = useState([]);


  // useEffect(() => {
  //   axios
  //     .get(URL13)
  //     .then((response) => {
  //       console.log(response.data);
  //       setTasks(response.data);
  //     })
  //     .catch((error) => {
  //       alert(error.response.data.error);
  //     });
  // }, []);
  
  // useEffect(() => {
  //   axios
  //     .get(URL14)
  //     .then((response) => {
  //       console.log(response.data);
  //       setTasks2(response.data);
  //     })
  //     .catch((error) => {
  //       alert(error.response.data.error);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(URL15)
  //     .then((response) => {
  //       console.log(response.data);
  //       setTasks3(response.data);
  //     })
  //     .catch((error) => {
  //       alert(error.response.data.error);
  //     });
  // }, []);

 const data = {
  labels: [
    'Energy',
    'Industrial Processes',
    'Waste',
    "Agriculture, Forestry & Land Use (AFOLU)"

  ],
  datasets: [{
    label: 'My First Dataset',
    data: [73.2, 5.2, 3.2, 18.4],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(102, 255, 102)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(102, 255, 102)'     
    ],
    hoverOffset: 4,
    borderWidth: 1,
    cutout: '80%'
  }]

  
  
};

      
      // {
      //   label: "Industrial processes",
      //   data: tasks,
      //   borderColor: "rgba(15, 44, 233, 0.8)",
      //   backgroundColor: "rgba(15, 44, 233, 0.8)",          
      // },
      // {
      //   label: "Waste",
      //   data: tasks,
      //   borderColor: "rgba(15, 44, 233, 0.8)",
      //   backgroundColor: "rgba(15, 44, 233, 0.8)",
        
      // },
      // {
      //   label: "Agriculture, Forestry & Land Use (AFOLU)",
      //   data: tasks,
      //   borderColor: "rgba(15, 44, 233, 0.8)",
      //   backgroundColor: "rgba(15, 44, 233, 0.8)",
      // },
  
  

  const config = {
    type: 'doughnut',
    radius: "50%",
    data,
   };

  // const myChart = new Chart(
  //   document.getElementById('myChart'),
  //   config
  // );

  return (
    <div className={GraphCSS.container}>
      <Doughnut options={config} data={data} />
      <p>
    {tasks1.map((task1) => (
    <p>
      {task1.Sector} {task1.SectorPercentages} 
    </p>
    ))}

{tasks2.map((task2) => (
    <p>
    {task2.SubSector} {task2.SubSectorPercentages}
    </p>
    ))}

{tasks3.map((task3) => (
    <p>
    {task3.SubSector2} {task3.SubSectorPercentages2}
    </p>
    ))}

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